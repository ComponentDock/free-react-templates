import { Play } from 'lucide-react'
import { ABOUT } from '../data'

/** About — two-column layout. Left: image with play button overlay.
    Right: heading, paragraph, and Watch Video link. */
export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image with play button */}
          <div className="relative">
            <img src={ABOUT.image} alt="About Regent" className="w-full rounded-lg object-cover" />
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
            >
              <Play className="h-6 w-6 fill-current" />
            </button>
          </div>
          {/* Text content */}
          <div>
            <h2 className="font-heading text-4xl font-bold text-ink">{ABOUT.heading}</h2>
            <p className="mt-6 leading-relaxed text-muted">{ABOUT.paragraph}</p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-hover"
            >
              <Play className="h-4 w-4" />
              {ABOUT.videoLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
