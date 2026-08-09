import { ButtonLink } from '@free-react-templates/ui'
import { CarSearch } from './CarSearch'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/clutch-hero/1920/900')" }}
    >
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="text-white">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Find Your Dream Car
          </p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight sm:text-5xl">
            Porsche Cayenne S
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-white/70">
            Model 2019
          </p>
          <p className="mt-4 font-display text-3xl font-black">
            $399<span className="text-base font-semibold text-white/70">/Month</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#cars" className="px-8 uppercase">
              Test Drive
            </ButtonLink>
            <ButtonLink
              href="#about"
              variant="outline"
              className="border-white/60 bg-transparent px-8 text-white hover:bg-white/10 dark:border-white/60 dark:text-white dark:hover:bg-white/10"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>

        <CarSearch />
      </div>
    </section>
  )
}
