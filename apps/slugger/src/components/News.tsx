import { newsPosts } from '../data'

export function News() {
  return (
    <section id="blog" aria-label="Recent news" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-bold uppercase text-dark md:text-5xl">
          Recent <span className="text-brand">News</span>
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {newsPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-md border border-black/10 bg-white"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/slugger-news-${post.day}-${post.month}/400/200`}
                  alt=""
                  className="h-44 w-full object-cover"
                />
                <div className="absolute left-3 top-3 bg-dark px-3 py-2 text-center text-white">
                  <span className="block font-display text-lg font-bold leading-none">
                    {post.day}
                  </span>
                  <span className="mt-0.5 block text-[10px] uppercase tracking-widest text-brand">
                    {post.month}
                  </span>
                  <span className="block text-[10px] uppercase tracking-widest text-white/60">
                    {post.year}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold leading-snug text-dark">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.snippet}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block font-display text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:text-brand"
                >
                  More Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
