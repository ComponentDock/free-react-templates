import { bannerPosts, imgUrl } from '../data'

export function Banner() {
  return (
    <section aria-label="Featured posts" className="bg-white dark:bg-gray-900">
      <div className="grid gap-8 px-4 py-14 md:grid-cols-3 md:px-6 lg:px-10">
        {bannerPosts.map((post) => (
          <article key={post.seed} className="relative">
            <img
              src={imgUrl(post.seed, 700, 520)}
              alt={post.title}
              className="h-72 w-full object-cover md:h-80"
            />
            <div className="relative mx-auto -mt-16 max-w-[320px] bg-white px-6 py-8 text-center shadow-sm dark:bg-gray-800">
              <p className="text-sm font-medium text-brand">{post.category}</p>
              <h2 className="mt-3 font-display text-xl font-bold leading-snug text-ink dark:text-white">
                <a href="#top" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h2>
              <p className="mt-3 text-sm text-body">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
