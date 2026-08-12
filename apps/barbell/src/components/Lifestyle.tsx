import { ButtonLink } from '@free-react-templates/ui'

export function Lifestyle() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="lg:mt-[88px]">
          <div className="mb-8 h-[7px] w-[52px] bg-brand" aria-hidden="true" />
          <h2 className="font-display text-4xl font-medium uppercase text-ink md:text-5xl">
            Lifestyle &amp; Diet
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <ButtonLink
            href="#contact"
            className="mt-8 rounded-none bg-brand px-14 py-5 font-display text-sm font-medium uppercase tracking-wider text-white hover:bg-brand-dark"
          >
            Read More
          </ButtonLink>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/barbell-food/800/600"
            alt="Cyclist crossing a bridge on a morning ride"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
