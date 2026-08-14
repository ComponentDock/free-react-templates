import { blogPosts } from '../data'

/** Emblem blog: three post cards (image, meta line, title, excerpt) on a
 *  white background. */
export function BlogSection() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-light text-brand lg:text-[2.5rem]">Our Blog</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/80">
          Ideas, guides and behind-the-scenes notes from the Emblem studio.
        </p>
        <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-white shadow-[0_5px_30px_-5px_rgba(0,0,0,0.1)]">
              <img
                src={post.image}
                alt=""
                className="h-56 w-full object-cover"
                width={800}
                height={500}
              />
              <div className="p-5">
                <p className="text-sm text-[#ccc]">{post.meta}</p>
                <h3 className="mt-2 text-[22px] font-bold leading-snug text-ink">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 leading-relaxed text-ink/80">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
