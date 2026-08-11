import { cardImage, latestNews, latestNewsHeading, latestNewsSectionLabel } from '../data'
import { PostMeta } from './PostMeta'

/* Latest News (reference `.latest-news-area`): heading above a list of
   post rows (thumbnail left, title + meta right). */
export function LatestNews() {
  return (
    <section aria-label={latestNewsSectionLabel}>
      <h3 className="mb-6 font-display text-xl font-bold uppercase tracking-wide text-white">
        {latestNewsHeading}
      </h3>
      <ul className="flex flex-col gap-5">
        {latestNews.map((post) => (
          <li key={post.id}>
            <article className="flex gap-4">
              <a href="#" className="shrink-0">
                <img
                  src={cardImage(post, 140, 90)}
                  alt={post.title}
                  className="h-[90px] w-[140px] object-cover"
                />
              </a>
              <div>
                <p className="mb-1 font-display text-xs font-bold uppercase tracking-widest text-brand">
                  {post.category}
                </p>
                <h4 className="font-display text-base font-bold leading-snug text-white">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h4>
                <div className="mt-1.5">
                  <PostMeta meta={post.meta} />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
