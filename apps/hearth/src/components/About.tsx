import { Play } from 'lucide-react'
import { ABOUT_IMAGE, ABOUT_PARAGRAPHS, HERO_THUMBS } from '../data'

/**
 * About — reverse zig-zag section (source `.ftco-wrap-about`): a 700px-tall
 * interior photo on the left with a centered play icon, and on the right the
 * script "About" label overlapping the "Welcome to Hearth Restaurant" heading,
 * two Blind-Text paragraphs and a row of three 80px circular thumbs.
 */
export function About() {
  return (
    <section id="about" className="bg-paper py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-12">
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden lg:col-span-5 lg:h-[700px]">
          <img
            src={ABOUT_IMAGE}
            alt="Inside the Hearth restaurant"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <button
            type="button"
            aria-label="Play video"
            className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition-colors hover:bg-white"
          >
            <Play className="ml-1 h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <div className="lg:col-span-7 lg:pl-10">
          <div className="max-w-md text-left">
            <span className="-mb-5 block font-script text-[50px] leading-none text-brand-soft">
              About
            </span>
            <h2 className="text-3xl font-bold text-ink lg:text-[32px]">
              Welcome to Hearth Restaurant
            </h2>
          </div>
          <div className="mt-6 max-w-xl space-y-4 text-muted">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex gap-6">
            {HERO_THUMBS.map((thumb, index) => (
              <img
                key={`${thumb.src}-${index}`}
                src={thumb.src}
                alt=""
                loading="lazy"
                className="h-20 w-20 rounded-full object-cover shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
