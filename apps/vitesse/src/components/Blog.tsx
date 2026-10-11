import { MessageSquare, User } from 'lucide-react'
import { BLOG_POSTS } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Blog() {
  return (
    <section id="blog" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Our Recent News" title="Logistics Blog" />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="flex flex-col">
              <img
                src={post.image}
                alt=""
                loading="lazy"
                className="mb-8 w-full rounded-md object-cover"
              />
              <div className="mb-5 flex items-center gap-5">
                <span className="rounded-md bg-soft px-4 py-3 text-center leading-none">
                  <span className="block font-display text-2xl font-semibold text-dark">
                    {post.day}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted">{post.month}</span>
                </span>
                <span className="flex items-center gap-2 text-sm text-muted">
                  <User aria-hidden="true" className="h-4 w-4 text-accent" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted">
                  <MessageSquare aria-hidden="true" className="h-4 w-4 text-accent" />
                  {post.comments}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-dark">{post.title}</h3>
              <p className="mt-3 flex-1 text-muted">{post.excerpt}</p>
              <a
                href="#blog"
                className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-accent hover:text-primary"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
