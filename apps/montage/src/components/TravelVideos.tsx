import { Play } from 'lucide-react'
import {
  cardImage,
  playLabel,
  rowImage,
  travelFeatured,
  travelHeading,
  travelRows,
  travelSectionLabel,
} from '../data'
import { PostMeta } from './PostMeta'

/* Travel videos section (reference `.travel-videos-area`): section heading,
   one featured card with a play overlay, and horizontal post rows. */
export function TravelVideos() {
  return (
    <section aria-label={travelSectionLabel} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 inline-block border-b-2 border-brand pb-1 font-display text-2xl font-bold uppercase tracking-wide">
          {travelHeading}
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden">
            <img
              src={cardImage(travelFeatured, 700, 420)}
              alt={travelFeatured.title}
              className="h-[280px] w-full object-cover sm:h-[380px]"
            />
            <a
              href="#"
              aria-label={playLabel(travelFeatured.title)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/40 text-white backdrop-blur-sm transition-colors hover:bg-brand">
                <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
              </span>
            </a>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <h3 className="font-display text-xl font-bold text-white">
                <a href="#" className="transition-colors hover:text-brand">
                  {travelFeatured.title}
                </a>
              </h3>
              <div className="mt-2">
                <PostMeta meta={travelFeatured.meta} onImage />
              </div>
            </div>
          </article>
          <ul className="flex flex-col justify-between gap-4">
            {travelRows.map((row) => (
              <li key={row.title}>
                <article className="flex gap-4">
                  <a href="#" className="shrink-0">
                    <img
                      src={rowImage(row)}
                      alt={row.title}
                      className="h-[90px] w-[120px] object-cover"
                    />
                  </a>
                  <div>
                    <h3 className="font-display text-base font-bold leading-snug text-ink">
                      <a href="#" className="transition-colors hover:text-brand">
                        {row.title}
                      </a>
                    </h3>
                    <div className="mt-1.5">
                      <PostMeta meta={row.meta} />
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
