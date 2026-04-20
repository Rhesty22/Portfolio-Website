import '../styles/pages/Blog.css'

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in your components...',
      date: 'March 15, 2026',
      category: 'React',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Scalable Node.js Applications',
      excerpt: 'Best practices for building scalable backend applications with Node.js and Express...',
      date: 'March 10, 2026',
      category: 'Backend',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Web Performance Optimization Tips',
      excerpt: 'Essential techniques to optimize your website for speed and performance...',
      date: 'March 5, 2026',
      category: 'Performance',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Understanding TypeScript Generics',
      excerpt: 'A deep dive into TypeScript generics and how to use them effectively...',
      date: 'February 28, 2026',
      category: 'TypeScript',
      readTime: '7 min read'
    }
  ]

  return (
    <section className="blog">
      <div className="blog-container">
        <h1>Blog</h1>
        <p className="section-subtitle">Articles and insights about web development</p>

        <div className="articles-list">
          {articles.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-header">
                <h2>{article.title}</h2>
                <div className="article-meta">
                  <span className="date">{article.date}</span>
                  <span className="category">{article.category}</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
              </div>
              <p className="article-excerpt">{article.excerpt}</p>
              <a href={`/blog/${article.id}`} className="read-more">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
