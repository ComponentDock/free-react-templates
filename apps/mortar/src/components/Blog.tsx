import { MessageCircle, User } from 'lucide-react'
import { blog } from '../data'

const posts = ['mortar-post-1', 'mortar-post-2', 'mortar-post-3'] as const

export function Blog() {
  return (
    <section id="blog" className="bg-mist pb-24 pt-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {blog.kicker}
        </span>
        <h2 className="mt-2 text-4xl font-medium text-ink md:text-5xl">{blog.heading}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((seed) => (
            <article
              key={seed}
              className="overflow-hidden rounded bg-white text-left shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]"
            >
              <a href="#blog" className="relative block">
                <img
                  src={`https://picsum.photos/seed/${seed}/600/400`}
                  alt=""
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center bg-brand text-charcoal">
                  <span className="text-lg font-bold leading-none">{blog.day}</span>
                  <span className="text-xs font-semibold uppercase">{blog.month}</span>
                </span>
              </a>
              <div className="p-6">
                <p className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4" aria-hidden="true" />
                    {blog.metaAuthor}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {blog.metaComments}
                  </span>
                </p>
                <h3 className="mt-3 text-lg font-medium leading-snug text-charcoal">
                  <a
                    href="#blog"
                    className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {blog.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{blog.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
