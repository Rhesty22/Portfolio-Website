import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolio'

const CACHE_KEY = 'portfolio-projects-v1'
const CACHE_TTL = 1000 * 60 * 15

let memoryCache = null

function readCache() {
  if (memoryCache && Date.now() - memoryCache.cachedAt < CACHE_TTL) {
    return memoryCache.projects
  }

  try {
    const cached = JSON.parse(window.sessionStorage.getItem(CACHE_KEY))
    if (cached?.projects && Date.now() - cached.cachedAt < CACHE_TTL) {
      memoryCache = cached
      return cached.projects
    }
  } catch {
    // Storage can be unavailable in privacy-focused browser settings.
  }

  return null
}

async function loadProjects() {
  // Keep the data boundary asynchronous so this can be replaced with an API call
  // without changing consumers. The bundled data remains the current source of truth.
  const projects = await Promise.resolve(portfolioData.projects)
  const nextCache = { projects, cachedAt: Date.now() }
  memoryCache = nextCache

  try {
    window.sessionStorage.setItem(CACHE_KEY, JSON.stringify(nextCache))
  } catch {
    // Rendering still works when session storage is unavailable.
  }

  return projects
}

/**
 * Reads cached projects immediately, then refreshes them in the background.
 * `optimisticProjects` lets a caller render known bundled content without a blank state.
 */
export function useProjects({ optimisticProjects } = {}) {
  const [projects, setProjects] = useState(() => readCache() ?? optimisticProjects ?? null)
  const [isRefreshing, setIsRefreshing] = useState(() => !readCache())

  useEffect(() => {
    let isCurrent = true
    setIsRefreshing(true)

    loadProjects().then(freshProjects => {
      if (!isCurrent) return
      setProjects(freshProjects)
      setIsRefreshing(false)
    })

    return () => {
      isCurrent = false
    }
  }, [])

  return { projects, isLoading: projects === null, isRefreshing }
}
