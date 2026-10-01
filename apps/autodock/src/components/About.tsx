import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="About us" />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-muted">
              AutoDock makes renting a car simple. Browse a curated fleet, compare daily rates, and
              book in minutes — no hidden fees, no waiting counters.
            </p>
            <p className="mt-4 text-muted">
              From compact city cars to spacious family SUVs, every vehicle is inspected before
              handover and backed by full insurance options. Pick up at any of our city offices or
              have the car delivered to your door.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <ButtonLink
                href="#home"
                className="rounded-none bg-brand px-6 py-3 font-bold uppercase text-carbon hover:bg-brand-deep"
              >
                Book a Car
              </ButtonLink>
              <ButtonLink
                href="#contact"
                variant="outline"
                className="rounded-none border-2 border-brand px-6 py-3 font-bold uppercase text-ink hover:bg-brand hover:text-carbon"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden bg-carbon">
            <img
              src="https://picsum.photos/seed/autodock-video/640/360"
              alt="Fleet showcase video"
              className="h-full w-full object-cover opacity-80"
              loading="lazy"
            />
            <button
              type="button"
              aria-label="Play showcase video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-carbon">
                <Play className="h-7 w-7 fill-current" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
