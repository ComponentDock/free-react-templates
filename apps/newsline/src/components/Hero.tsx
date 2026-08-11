import { useState } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  durationBadgeLabel,
  heroImage,
  heroSectionLabel,
  heroVideos,
  playLabel,
  playlistLabel,
  thumbImage,
} from '../data'
import { PostMeta } from './PostMeta'

/* Split hero (reference `.hero-area`): large featured video card on the
   left (cover, category tag, headline, meta, play overlay, duration
   badge) and a dark playlist panel on the right whose rows swap the
   featured video (state-driven tabs, no Bootstrap JS). */
export function Hero() {
  const [activeId, setActiveId] = useState(heroVideos[0]!.id)
  const featured = heroVideos.find((video) => video.id === activeId)!
  return (
    <section aria-label={heroSectionLabel} className="bg-night">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article className="relative overflow-hidden lg:col-span-2">
          <img
            src={heroImage(featured)}
            alt={featured.title}
            className="h-[320px] w-full object-cover sm:h-[440px]"
          />
          <a
            href="#"
            aria-label={playLabel(featured.title)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-hover">
              <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
            </span>
          </a>
          <span
            className="absolute right-3 top-3 bg-ink px-2 py-1 font-display text-sm text-white"
            title={durationBadgeLabel(featured.duration)}
          >
            {featured.duration}
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="mb-2 inline-block bg-brand px-2 py-1 font-display text-xs font-bold uppercase tracking-widest text-white">
              {featured.category}
            </p>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              <a href="#" className="transition-colors hover:text-brand">
                {featured.title}
              </a>
            </h2>
            <div className="mt-3">
              <PostMeta meta={featured.meta} onImage />
            </div>
          </div>
        </article>

        <div role="region" aria-label={playlistLabel} className="bg-panel">
          <ul className="flex flex-col">
            {heroVideos.map((video) => (
              <li key={video.id}>
                <button
                  type="button"
                  aria-current={video.id === featured.id ? 'true' : undefined}
                  aria-label={`Show ${video.title}`}
                  onClick={() => setActiveId(video.id)}
                  className={cn(
                    'flex w-full items-center gap-3 border-l-4 px-4 py-3 text-left transition-colors',
                    video.id === featured.id
                      ? 'border-brand bg-panel-active'
                      : 'border-transparent hover:bg-panel-active/60',
                  )}
                >
                  <img
                    src={thumbImage(video)}
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-20 shrink-0 object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-display text-sm font-bold text-white">
                      {video.title}
                    </span>
                    <span className="mt-1 block">
                      <PostMeta meta={video.meta} />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
