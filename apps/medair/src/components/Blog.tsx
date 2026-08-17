import { MessageCircle, User } from 'lucide-react'
import { BLOG_POSTS } from '../data'

/** Blog — light-background section with three white post cards: photo,
    green date block, meta, title, blurb, and Continue Reading link. */
export function Blog() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          Our Blog
        </p>
        <h2 className="mt-3 text-center font-display text-4xl text-dark sm:text-5xl">
          Recent Blog
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {BLOG_POSTS.map(({ day, month, title, image, blurb }) => (
            <article
              key={title}
              className="overflow-hidden rounded bg-white shadow-[0px_10px_25px_-13px_rgba(0,0,0,0.1)]"
            >
              <div className="relative">
                <img src={image} alt="" className="h-56 w-full object-cover" loading="lazy" />
                <div className="absolute bottom-5 left-5 bg-brand px-4 py-3 text-center text-white">
                  <span className="block font-display text-3xl leading-none">{day}</span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wider">
                    {month}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <p className="flex items-center gap-4 text-[13px] font-semibold uppercase tracking-wider text-black/50">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4 text-brand" aria-hidden="true" />
                    Admin
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />3 Comments
                  </span>
                </p>
                <h3 className="mt-4 text-2xl text-ink transition-colors hover:text-brand">
                  <a href="#blog">{title}</a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/50">{blurb}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-[13px] font-semibold uppercase tracking-widest text-ink transition-colors hover:text-brand"
                >
                  Continue Reading
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
