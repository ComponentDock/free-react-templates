import { ButtonLink } from '@free-react-templates/ui'
import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] overflow-hidden bg-brand lg:min-h-[600px]"
    >
      {/* Left: text */}
      <div className="flex w-full items-center bg-brand px-4 py-16 sm:px-6 lg:w-1/2 lg:py-24">
        <div className="max-w-lg">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Hello,
          </span>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            I&apos;m Marco Sebastián
          </h1>
          <h2 className="mt-2 text-2xl font-semibold text-white/90 sm:text-3xl lg:text-4xl">
            A Corporate Lawyer
          </h2>
          <ButtonLink
            href="#contact"
            className="mt-8 inline-flex rounded bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-brand transition-colors hover:bg-gray-100"
          >
            Contact Me
          </ButtonLink>
        </div>
      </div>

      {/* Right: background image */}
      <div className="relative hidden lg:block lg:w-1/2">
        <img
          src="https://picsum.photos/seed/alibi-hero/800/600"
          alt="Lawyer at office desk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <a
          href="#"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition-transform hover:scale-110"
          aria-label="Watch video"
        >
          <Play className="ml-1 h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
