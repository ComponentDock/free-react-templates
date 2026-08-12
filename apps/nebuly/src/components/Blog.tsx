import { BLOG } from '../data'

/* Blog — three post cards with image, meta row (date · author · comments),
   and a title link. */

export function Blog() {
  return (
    <section id="blog-section" className="bg-light py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[32px] font-bold text-navy dark:text-white sm:text-[40px]">
          {BLOG.heading}
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {BLOG.items.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <img src={post.image} alt="" className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-7">
                <p className="text-[13px] uppercase tracking-wide text-gray-400">{post.meta}</p>
                <h3 className="mt-3">
                  <a
                    href="#blog-section"
                    className="text-[19px] font-semibold text-navy transition-colors hover:text-brand dark:text-white"
                  >
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
