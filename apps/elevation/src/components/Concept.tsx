import { ButtonLink } from '@free-react-templates/ui'

export function Concept() {
  return (
    <section id="about" className="py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 px-4 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/seed/elevation-concept/800/600"
            alt="Elevation concept — modern architecture model"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center bg-ink px-8 py-12 text-white sm:px-14">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Precise Concept Design for Stylish Living
            </h2>
            <p className="mt-6 leading-relaxed text-white/70">
              If you are looking at blank cassettes on the web, you may be very confused at the
              difference in price. You may see some for as low as $.17 each.
            </p>
            <ButtonLink
              href="#services"
              className="mt-8 rounded-[5px] bg-brand px-10 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
            >
              More About Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
