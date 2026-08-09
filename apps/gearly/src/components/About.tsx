import { PlayCircle } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="courses" className="bg-paper py-16 transition-colors dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div
          className="relative flex aspect-video items-center justify-center rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/gearly-about/800/450')" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-navy/50" aria-hidden="true" />
          <button
            type="button"
            aria-label="Play introduction video"
            className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand text-navy transition-transform hover:scale-105"
          >
            <PlayCircle className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Welcome to Gearly
          </p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase text-ink dark:text-white">
            Looking for lessons?
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-mist dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <ButtonLink href="#courses" className="mt-6 bg-navy uppercase hover:bg-navy/90">
            Learn more
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
