import { blogPosts } from '../data'

/** "Latest Blog" section: label + "Tips & Tricks" heading and two blog
 *  cards (image, meta date, title, excerpt). */
export function Blog() {
  return (
    <section id="blog" className="bg-cream pb-[100px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <span className="font-serif text-base uppercase tracking-wide text-olive">
            Latest Blog
          </span>
          <h2 className="mt-5 text-4xl font-bold text-ink lg:text-[46px]">Tips &amp; Tricks</h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.image} className="bg-white">
              <img src={post.image} alt={post.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-medium text-olive">{post.meta}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 leading-relaxed text-olive">{post.excerpt}</p>
                <a href="#blog" className="mt-5 inline-block font-semibold text-brand underline">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
