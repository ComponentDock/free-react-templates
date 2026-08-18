import { Calendar, MessageCircle } from 'lucide-react'
import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-brand">
            Our Blog
          </span>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Recent From Blog</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded bg-paper shadow-[0_10px_25px_-13px_rgba(0,0,0,0.15)]"
            >
              <img
                src={post.src}
                alt={post.title}
                loading="lazy"
                className="aspect-[8/5] w-full object-cover"
              />
              <div className="p-7">
                <p className="mb-3 flex flex-wrap items-center gap-4 text-xs text-body">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar aria-hidden="true" className="size-3.5 text-brand" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageCircle aria-hidden="true" className="size-3.5 text-brand" />{' '}
                    {post.comments} Comments
                  </span>
                </p>
                <h3 className="mb-3 text-lg font-medium leading-snug text-ink">{post.title}</h3>
                <p className="text-sm leading-relaxed text-body">
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
