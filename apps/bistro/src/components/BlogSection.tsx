import { BLOG_POSTS } from '../data'

/**
 * BlogSection — "Our Recent News" (source `.blogs-area`): three blog cards
 * whose caption box overlaps the photo bottom (light #f7f9f8, 5px radius,
 * ~94% width, shifted up to overlap) and fills orange with white text on
 * hover/focus.
 */
export function BlogSection() {
  return (
    <section id="blog" className="bg-white py-24 lg:py-[195px] lg:pb-[140px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-base font-medium text-brand">Our New Blog News</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink lg:text-[49px]">
            Our Recent News
          </h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.seed} className="group">
              <div className="overflow-hidden rounded-md">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt=""
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 -mt-16 ml-auto w-[94%] rounded-md bg-mist p-6 transition-colors duration-300 group-hover:bg-brand">
                <p className="text-sm font-medium uppercase tracking-wide text-meta transition-colors duration-300 group-hover:text-white">
                  {post.date}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-white">
                  <a href="#blog" className="hover:underline">
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
