import { Chip } from './Chip'
import { imgUrl, popularFeatured, popularHeading, popularRows } from '../data'

export function PopularPosts() {
  return (
    <section aria-label={popularHeading} className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="font-serif text-2xl font-bold text-ink">{popularHeading}</h2>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        {/* Left: large featured post */}
        <a href="#home" className="group block">
          <img
            src={imgUrl(popularFeatured.seed, 700, 420)}
            alt=""
            className="w-full rounded object-cover"
          />
          <div className="mt-4">
            <Chip label={popularFeatured.chipLabel} category={popularFeatured.category} />
            <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-ink transition-colors group-hover:text-primary">
              {popularFeatured.title}
            </h3>
            <p className="mt-2 flex items-center gap-2 text-[13px] text-meta">
              <span className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full border border-soft">
                <img
                  src={imgUrl(`${popularFeatured.seed}-avatar`, 60, 60)}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </span>
              {popularFeatured.author} &ndash; {popularFeatured.date}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-entry">{popularFeatured.excerpt}</p>
          </div>
        </a>

        {/* Right: three compact rows */}
        <div className="space-y-6">
          {popularRows.map((post) => (
            <a key={post.seed} href="#home" className="group flex items-center gap-4">
              <div className="order-1 mr-4">
                <Chip label={post.chipLabel} category={post.category} />
                <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-1 text-[13px] text-meta">{post.date}</p>
                <p className="mt-2 text-sm leading-relaxed text-entry">{post.excerpt}</p>
              </div>
              <img
                src={imgUrl(post.seed, 300, 200)}
                alt=""
                className="order-2 h-[120px] w-[150px] shrink-0 rounded object-cover transition-opacity group-hover:opacity-50"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
