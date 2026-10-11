import { MessageCircle } from 'lucide-react'
import { BLOG } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function TipsArticles() {
  return (
    <section id="blog" className="section-gap bg-mist">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading subheading="Recent Blog" lead="Tips" rest="& Articles" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG.map((post) => (
            <article key={post.image} className="listing-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="p-6">
                <span className="tag-chip">{post.tag}</span>
                <h3 className="mt-3 text-lg font-medium">
                  <a href="#blog" className="text-heading hover:text-coral">
                    {post.title}
                  </a>
                </h3>
                <p className="blog-meta mt-4">
                  {post.date}
                  <span>·</span>
                  {post.author}
                  <span className="loc">
                    <MessageCircle aria-hidden="true" className="h-4 w-4" />
                    {post.comments}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
