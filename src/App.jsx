import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './styles/App.css'

function App() {
  return (
    <Router>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </PublicLayout>
    </Router>
  )
}

export default App
