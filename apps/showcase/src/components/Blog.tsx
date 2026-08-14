import { CalendarDays, MessageCircle, User } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog-section" aria-label="Blog" className="bg-surface/60 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading title="Our Blog" />
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl border border-line bg-white"
            >
              <img src={post.image} alt="" loading="lazy" className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-brand" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4 text-brand" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-medium text-heading">
                  <a href="#blog-section" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
