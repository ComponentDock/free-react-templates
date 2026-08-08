import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white dark:bg-gray-950"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="max-w-md text-mist dark:text-white/60">
            Separated they live in. Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            We are Chisel, and we shape buildings.
          </h1>
          <p className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#about" variant="primary">
              About us
            </ButtonLink>
            <a
              href="#services"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-ink/80"
            >
              Our services
            </a>
          </p>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/chisel-hero/800/1000"
            alt="Modern architecture building"
            className="h-[420px] w-full rounded object-cover lg:h-[560px]"
          />
        </div>
      </div>
    </section>
  )
}
