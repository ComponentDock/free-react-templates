import { ButtonLink } from '@free-react-templates/ui'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-dark"
      aria-label="Hero"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://picsum.photos/seed/structa-hero/1920/1080')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Experienced Construction Solution
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Building the future with precision, quality, and dedication. Your trusted partner for
            all construction needs.
          </p>
          <ButtonLink
            href="#services"
            className="mt-8 inline-flex items-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Our Services
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        {/* Right sidebar */}
        <div className="w-full max-w-sm rounded-lg bg-brand/90 p-6 backdrop-blur-sm lg:max-w-xs">
          <h2 className="text-lg font-semibold text-white">Explore Our Latest Projects</h2>
          <p className="mt-2 text-sm text-white/80">
            Discover our portfolio of completed construction projects.
          </p>
          <a
            href="#projects"
            className="mt-4 inline-flex items-center text-sm font-medium text-white hover:underline"
          >
            Explore Now
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
