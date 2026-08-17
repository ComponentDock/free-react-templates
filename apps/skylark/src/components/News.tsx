import { BLOG_POSTS, RECENT_NEWS } from '../data'

/* News Latest — split section: recent posts list on the left, two blog
   cards with overlapping date badges on the right. */
export function News() {
  return (
    <section aria-label="News Latest" id="news-latest" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <p className="h-1.5 w-20 bg-brand" aria-hidden="true" />
          <h2 className="mt-4 text-4xl font-extrabold text-ink lg:text-5xl">News Latest</h2>
          <div className="mt-10">
            {RECENT_NEWS.map((item) => (
              <a
                key={item.title}
                href="#news-latest"
                className="group flex gap-5 border-b border-ink/10 py-5 last:border-b-0"
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-[90px] w-[90px] shrink-0 object-cover"
                />
                <div>
                  <ul className="flex gap-4 text-xs font-bold uppercase tracking-wide text-muted">
                    <li>{item.meta}</li>
                    <li>{item.author}</li>
                  </ul>
                  <h3 className="mt-1.5 text-base font-extrabold leading-snug text-ink transition-colors group-hover:text-brand">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="group bg-white">
                <div className="relative">
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <span className="absolute -top-4 left-6 bg-brand px-3 py-2 text-[13px] font-extrabold uppercase tracking-[2px] text-white">
                    {post.date}
                  </span>
                </div>
                <div className="pt-8">
                  <ul className="flex gap-4 text-xs font-bold uppercase tracking-wide text-muted">
                    <li>{post.meta}</li>
                    <li>{post.author}</li>
                  </ul>
                  <h3 className="mt-2 text-xl font-extrabold leading-snug text-ink transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
