import { blogPosts } from '../data'

/* Reference: section.home-blog (light grey #F6F6F6 band) — "Latest News"
   heading and three blog cards, each with a photo, a "Fashion Tips" tag, a
   title, an excerpt and a dark uppercase "Read More" button that turns into
   a dark outline on hover. */
export function LatestNews() {
  return (
    <section id="blog" aria-label="Latest news" className="bg-blog pb-[29px] pt-20">
      <div className="mx-auto max-w-[1320px] px-4">
        <h2 className="text-center text-[34px]">Latest News</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="mb-[30px] bg-white">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <p className="text-sm font-medium uppercase text-brand">{post.tag}</p>
                <h3 className="mt-2 text-xl font-medium text-charcoal">{post.title}</h3>
                <p className="mt-2 text-sm text-copy">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-5 inline-block border border-transparent bg-charcoal px-[47px] py-[15px] font-heading text-sm font-medium uppercase tracking-wide text-white transition-colors hover:border-charcoal hover:bg-transparent hover:text-charcoal"
                >
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
