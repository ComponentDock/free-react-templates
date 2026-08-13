import { MessageCircle } from 'lucide-react'
import { blog } from '../data'

/** Light-background blog section with three post cards: image, meta line
 *  (date · author · comment count), title link and excerpt (source
 *  #blog-section .blog-entry). */
export function Blog() {
  return (
    <section id="blog-section" data-testid="blog" className="bg-light py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <p className="section-eyebrow">{blog.eyebrow}</p>
        <h2 className="section-title">{blog.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">{blog.intro}</p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {blog.posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded bg-white shadow-sm"
            >
              <img src={post.image} alt="" className="h-52 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                  {post.date} · Admin · {post.comments}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-ink">
                  <a href="#blog-section" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-muted">
                  <MessageCircle className="h-4 w-4 text-brand" aria-hidden="true" />
                  {post.comments} Comments
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
