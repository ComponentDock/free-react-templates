import { hotFeature, hotStacked, imgUrl } from '../data'

export function HotPosts() {
  return (
    <section aria-label="Hot posts" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <article className="group relative overflow-hidden lg:col-span-2">
          <img
            src={imgUrl(hotFeature.seed, 800, 500)}
            alt=""
            className="aspect-[8/5] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/30 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <a href="#" className="text-xs font-bold tracking-wide text-brand uppercase">
              {hotFeature.category}
            </a>
            <h2 className="mt-2 text-2xl font-bold text-white">{hotFeature.title}</h2>
            <p className="mt-2 text-xs text-white/80 uppercase">{hotFeature.meta}</p>
          </div>
        </article>

        <div className="flex flex-col gap-6">
          {hotStacked.map((post) => (
            <article key={post.seed} className="group flex gap-4">
              <img
                src={imgUrl(post.seed, 400, 250)}
                alt=""
                className="h-[130px] w-[45%] object-cover transition-transform duration-[1600ms] group-hover:scale-110"
              />
              <div className="flex flex-col justify-center">
                <a href="#" className="text-xs font-bold tracking-wide text-brand uppercase">
                  {post.category}
                </a>
                <h3 className="mt-1 text-base leading-snug font-bold text-ink">{post.title}</h3>
                <p className="mt-1 text-xs text-meta uppercase">{post.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
