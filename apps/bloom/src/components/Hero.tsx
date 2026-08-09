import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand/10 via-white to-sky/10 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-40">
        <div>
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-sky-dark dark:text-sky">
            Skin & Beauty Care
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            Beauty Salon
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mist dark:text-gray-400 sm:text-lg">
            Even the all-powerful pointing has no control about the blind texts — but our stylists
            do. Facials, makeup, nails, and hair, all under one roof.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#services"
              className="rounded-full bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
            >
              View Our Services
            </ButtonLink>
            <ButtonLink
              href="#appointment"
              className="rounded-full border border-sky bg-sky/10 px-10 uppercase tracking-[0.2em] text-sky-dark transition-colors hover:bg-sky hover:text-white dark:text-sky"
            >
              Book Now
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/bloom-hero/800/900"
            alt="Beauty stylist preparing a client"
            className="w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
