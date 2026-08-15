import { MessageCircle } from 'lucide-react'
import { blogPosts } from '../data'
import { SectionHeading } from './SectionHeading'

/** Three recent blog entries with image, title, meta row and excerpt. */
export function Blog() {
  return (
    <section id="blog" className="bg-white pb-24">
      <div className="mx-auto max-w-[1250px] px-4">
        <SectionHeading label="Blog" title="Recent Blog" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title}>
              <a href="#blog" className="block overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="h-[220px] w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </a>
              <h3 className="mt-5 mb-2 text-lg font-semibold text-ink">
                <a href="#blog" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mb-2 text-sm text-body">
                {post.date} · {post.author} ·{' '}
                <span className="inline-flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {post.comments}
                </span>
              </p>
              <p className="text-body">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
