import {
  cardImage,
  durationBadgeLabel,
  trendingHeading,
  trendingSectionLabel,
  trendingVideos,
} from '../data'
import { PostMeta } from './PostMeta'

/* Trending videos (reference `.trending-posts-area`): centered heading
   with a red underline and a three-column grid of video cards. */
export function TrendingVideos() {
  return (
    <section aria-label={trendingSectionLabel} className="bg-night">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-display text-2xl font-bold uppercase tracking-wide text-white">
            {trendingHeading}
          </h2>
          <span className="mx-auto block h-0.5 w-24 bg-meta">
            <span className="block h-0.5 w-10 bg-brand" aria-hidden="true" />
          </span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trendingVideos.map((video) => (
            <article key={video.id}>
              <div className="relative mb-4 overflow-hidden">
                <img
                  src={cardImage(video)}
                  alt={video.title}
                  className="aspect-video w-full object-cover"
                />
                <span
                  className="absolute bottom-2 right-2 bg-ink px-2 py-1 font-display text-sm text-white"
                  title={durationBadgeLabel(video.duration)}
                >
                  {video.duration}
                </span>
              </div>
              <h3 className="font-display text-base font-bold leading-snug text-white">
                <a href="#" className="transition-colors hover:text-brand">
                  {video.title}
                </a>
              </h3>
              <div className="mt-2">
                <PostMeta meta={video.meta} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
