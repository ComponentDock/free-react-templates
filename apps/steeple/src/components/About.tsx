import { ArrowRight, Play } from 'lucide-react'
import { ABOUT } from '../data'

export function About() {
  return (
    <section id="about" aria-label="About our church" className="py-14 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:gap-16">
        <div className="relative w-full md:w-1/2">
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 h-[97%] w-[97%] bg-accent md:-bottom-5 md:-right-5"
          />
          <img
            src={ABOUT.image}
            alt="Members of the congregation gathered together"
            className="relative h-64 w-full object-cover md:h-80"
            loading="lazy"
          />
          <button
            type="button"
            aria-label="Play about video"
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105"
          >
            <Play aria-hidden="true" className="h-10 w-10 fill-ink text-ink" />
          </button>
        </div>

        <div className="w-full md:w-5/12">
          <h2 className="mb-3 text-3xl font-normal text-ink md:text-4xl">{ABOUT.heading}</h2>
          <p className="mb-3 text-xl text-ink">{ABOUT.tagline}</p>
          <p className="mb-6 leading-relaxed text-body">{ABOUT.body}</p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.05em] text-primary-600 transition-colors hover:text-primary-700"
          >
            Watch Video
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
