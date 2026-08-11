import { ArrowRight, Calendar, Folder, MessageCircle } from 'lucide-react'
import { blogPosts, readMoreLabel } from '../data'

export function BlogGrid() {
  return (
    <section aria-label="Blog posts" className="bg-white py-16 md:py-[130px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.seed}
              className="bg-mist transition-colors duration-300 hover:bg-white hover:shadow-[0_20px_30px_rgba(0,35,71,0.1)]"
            >
              <a href="#" aria-label={post.title} className="block">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/800/600`}
                  alt={post.title}
                  className="h-64 w-full object-cover"
                />
              </a>
              <div className="p-10">
                <h3 className="font-serif text-lg font-semibold leading-snug text-ink">
                  <a href="#" className="transition-colors hover:text-ink/70">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-4 flex items-center gap-6 text-sm text-muted">
                  <span className="flex items-center gap-2">
                    <Calendar aria-hidden="true" className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle aria-hidden="true" className="h-4 w-4" />
                    {post.comments}
                  </span>
                </p>
                <p className="mt-4 leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink transition-opacity hover:opacity-70"
                  >
                    {readMoreLabel}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                  <span className="flex items-center gap-2 text-sm text-muted">
                    <Folder aria-hidden="true" className="h-4 w-4" />
                    {post.category}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
