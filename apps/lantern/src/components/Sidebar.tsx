import { Play } from 'lucide-react'
import {
  adLabel,
  newestVideoTitle,
  newestVideos,
  playLabel,
  topStories,
  topStoriesTitle,
} from '../data'

const adBlockClasses =
  'flex items-center justify-center rounded-[2px] border-2 border-dashed border-ash/50'

/** Right sidebar column: TOP STORIES rows (120x120 thumb + title), an ad
    placeholder, a NEWEST VIDEO list with play icons, and a second ad
    placeholder (reference: col-lg-4 on the Quitelight preview). */
export function Sidebar() {
  return (
    <aside aria-label="Sidebar" className="lg:col-span-4">
      <h2 className="text-base font-bold uppercase tracking-[0.15em]">{topStoriesTitle}</h2>
      <ul className="mt-5 space-y-5">
        {topStories.map((story) => (
          <li key={story.seed} className="flex gap-4">
            <img
              src={`https://picsum.photos/seed/${story.seed}/120/120`}
              alt=""
              className="h-24 w-24 shrink-0 object-cover"
            />
            <h3 className="text-sm font-bold leading-snug">
              <a href="#story" className="transition-colors hover:text-brand">
                {story.title}
              </a>
            </h3>
          </li>
        ))}
      </ul>

      <div role="img" aria-label={adLabel} className={`mt-8 h-72 ${adBlockClasses}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ash">{adLabel}</p>
      </div>

      <h2 className="mt-10 text-base font-bold uppercase tracking-[0.15em]">{newestVideoTitle}</h2>
      <ul className="mt-5 space-y-5">
        {newestVideos.map((video) => (
          <li key={video.seed} className="flex items-center gap-4">
            <a
              href="#video"
              aria-label={playLabel(video.title)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-brand"
            >
              <Play className="h-4 w-4 text-white" aria-hidden="true" />
            </a>
            <h3 className="text-sm font-bold leading-snug">
              <a href="#video" className="transition-colors hover:text-brand">
                {video.title}
              </a>
            </h3>
          </li>
        ))}
      </ul>

      <div role="img" aria-label={adLabel} className={`mt-10 h-48 ${adBlockClasses}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ash">{adLabel}</p>
      </div>
    </aside>
  )
}
