import { ArrowRight } from 'lucide-react'
import { blog } from '../data'

/* Blog: pink uppercase "BLOG" eyebrow, section title and three post cards
 * with an image, category tag, title and "Continue Reading..." link. */
export function Blog() {
  return (
    <section id="blog" data-testid="blog" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <span className="text-[13px] uppercase tracking-[0.2em] text-brand">{blog.eyebrow}</span>
        <h2 className="mt-2 text-4xl font-black leading-tight text-brand md:text-[40px]">
          {blog.title}
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {blog.posts.map((post) => (
            <article key={post.title} className="border border-line bg-white shadow-sm">
              <img src={post.image} alt="" className="h-56 w-full object-cover" />
              <div className="p-6">
                <span className="inline-block rounded-full border border-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                  {post.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-ink">{post.title}</h3>
                <a
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-2 font-medium text-brand transition-colors hover:underline"
                >
                  {post.readMore}
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
