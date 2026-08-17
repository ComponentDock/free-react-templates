import { Play } from 'lucide-react'
import { ABOUT_SPLIT } from '../data'

/* AboutSplit — image background with a right-aligned text column, a
   heading, and a Watch Video play link. */
export function AboutSplit() {
  return (
    <section aria-label="About" id="about" className="relative py-24 lg:py-32">
      <img
        src={ABOUT_SPLIT.image}
        alt="Furniture workshop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-paper/70" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl justify-end px-6">
        <div className="max-w-xl rounded-lg bg-paper/85 p-10 shadow-lg backdrop-blur-sm">
          <h2 className="font-display text-3xl font-semibold leading-snug text-ink lg:text-[38px]">
            {ABOUT_SPLIT.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{ABOUT_SPLIT.text}</p>
          <a
            href={ABOUT_SPLIT.videoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={ABOUT_SPLIT.videoLabel}
            className="group mt-8 inline-flex items-center gap-3 text-lg font-medium text-steel transition-colors hover:text-amber"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-steel text-white shadow-lg transition-colors group-hover:bg-amber">
              <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
            </span>
            {ABOUT_SPLIT.videoLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
