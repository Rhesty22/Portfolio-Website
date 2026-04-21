import '../styles/pages/Blog.css'
import { blogData } from '../data/blog'

export default function Blog() {

  return (
    <section className="blog">
      <div className="blog-container">
        <h1>Blog</h1>
        <p className="section-subtitle">Articles and insights about web development</p>

        <div className="articles-list">
          {blogData.map(article => (
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
