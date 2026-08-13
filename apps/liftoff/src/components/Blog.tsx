import { blog } from '../data'

/** Blog section (reference `#blog-section`): the centered 900-weight title
 *  and three horizontal-entry cards — image, 30px black headline link, a
 *  14px #b3b3b3 meta line and a Continue Reading link. */
export function Blog() {
  return (
    <section id="blog-section" aria-label="Blog" className="bg-paper py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-[30px] font-black text-ink lg:text-[40px]">
          {blog.heading}
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blog.posts.map((post) => (
            <article key={post.title} className="h-entry">
              <img
                src={post.image}
                alt=""
                aria-hidden="true"
                className="mb-[30px] h-auto w-full"
                loading="lazy"
              />
              <h3 className="font-heading text-[30px] font-black leading-snug text-ink">
                <a href="#blog-section" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mt-4 mb-4 text-sm text-meta">{post.meta}</p>
              <p className="text-muted">{post.excerpt}</p>
              <p className="mt-4">
                <a href="#blog-section" className="transition-colors hover:text-brand">
                  {blog.continueReading}
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
