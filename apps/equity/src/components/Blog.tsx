import { blogPosts } from '../data'

/** Blog section (reference `.site-section`): an uppercase eyebrow and "Our
 *  Blog" heading followed by two post cards with photo, linked title, meta
 *  line, excerpt, and a link. */
export function Blog() {
  return (
    <section id="blog" aria-label="Our Blog" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-[#b8b8b8] uppercase">
          Latest Blog Posts
        </p>
        <h2 className="mt-2 font-heading text-4xl font-bold text-[#25262a]">Our Blog</h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {blogPosts.map(({ title, date, author, excerpt, image }) => (
          <article key={title + date} className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <img src={image} alt="" className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-8">
              <h3 className="font-heading text-xl font-bold">
                <a href="#blog" className="text-[#25262a] transition-colors hover:text-primary-600">
                  {title}
                </a>
              </h3>
              <p className="mt-2 text-xs font-semibold tracking-wide text-[#939393] uppercase">
                {date} · {author}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#939393]">{excerpt}</p>
              <a
                href="#blog"
                className="mt-5 inline-block text-sm font-semibold text-primary-600 underline-offset-4 hover:underline"
              >
                Get Started
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
