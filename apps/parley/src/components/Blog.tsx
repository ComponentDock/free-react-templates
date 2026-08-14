import { ArrowRight, User } from 'lucide-react'
import { blog } from '../data'

/** Recent Blog strip (source: 3 .blog-entry cards): photo, date badge
 *  (15 · Oct. · 2019), post title, blurb, Admin meta and a "Read More"
 *  link. */
export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm font-bold uppercase tracking-[2px] text-brand">
          {blog.subheading}
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ink lg:text-4xl">{blog.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted">
          {blog.intro}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blog.posts.map((post) => (
            <article key={post.image} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative">
                <img src={post.image} alt="" className="h-56 w-full object-cover" loading="lazy" />
                <div className="absolute left-4 top-4 bg-brand px-3 py-2 text-center text-white">
                  <span className="block text-xl font-bold leading-none">{post.day}</span>
                  <span className="block text-xs font-medium">{post.month}</span>
                  <span className="block text-xs font-medium">{post.year}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.text}</p>
                <p className="mt-4 flex items-center gap-2 text-xs text-muted">
                  <User className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.meta}
                </p>
                <a
                  href="#blog"
                  onClick={(event) => event.preventDefault()}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
                >
                  {blog.readMore}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
