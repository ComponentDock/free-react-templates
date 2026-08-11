import { Play } from 'lucide-react'
import { aboutName, aboutParagraph, aboutSectionLabel, signature, watchVideoLabel } from '../data'

export function About() {
  return (
    <section aria-label={aboutSectionLabel} className="bg-coal py-20 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            {/* Watch Video — btn-custom popup-vimeo in the original. */}
            <p className="mb-6">
              <a
                href="#"
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-accent"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Play className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                {watchVideoLabel}
              </a>
            </p>
            <h1 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl">
              {aboutName}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">{aboutParagraph}</p>
            {/* signature — italic Playfair serif with an underline. */}
            <p className="mt-8 font-serif text-2xl italic text-white/80 underline decoration-white/20 decoration-1 underline-offset-8">
              {signature}
            </p>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/fable-about/900/600"
              alt="A table full of homemade food"
              className="h-80 w-full object-cover md:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
