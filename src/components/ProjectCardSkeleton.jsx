export default function ProjectCardSkeleton() {
  return (
    <article className="project-card-full project-card-skeleton" aria-hidden="true">
      <span className="skeleton-line skeleton-title" />
      <span className="skeleton-media" />
      <span className="skeleton-line" />
      <span className="skeleton-line skeleton-line-short" />
      <div className="skeleton-tags"><span /><span /><span /></div>
      <div className="skeleton-links"><span /><span /></div>
    </article>
  )
}
