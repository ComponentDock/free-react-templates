import { EXTENDS_COPY, EXTENDS_HEADLINE, EXTENDS_IMAGE } from '../data'

/**
 * Extends — full-bleed brand gradient band: photo with a gradient circle
 * video play button on the left, Teko headline + body copy on the right.
 */
export function Extends() {
  return (
    <section className="bg-gradient-to-r from-brand via-brand-2 to-brand py-24 lg:py-35">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:px-8">
        <div className="relative lg:col-span-5">
          <img
            src={EXTENDS_IMAGE}
            alt="A Gains athlete pushing through a hard set"
            className="w-full rounded-md object-cover"
          />
          <a
            href="#courses"
            aria-label="Play the training video"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand shadow-lg transition-transform hover:scale-105"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-8 w-8"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <h2 className="text-4xl font-bold uppercase leading-tight text-white lg:text-5xl">
            {EXTENDS_HEADLINE}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/90">{EXTENDS_COPY}</p>
        </div>
      </div>
    </section>
  )
}
