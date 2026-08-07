import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/arclabs-about/640/480"
            alt="Architects reviewing a building model"
            className="h-full w-full object-cover"
          />
          <span
            className="absolute -bottom-4 -right-4 hidden h-28 w-28 bg-brand lg:block"
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">About Us</p>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            We are world number one Company
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            Face male he light it moveth darkness winged eveni seas after life every gathering is
            forth two kind itself one divide open from. Female light him moveth earth behold. Years
            seasons abundantly land.
          </p>
          <ButtonLink
            href="#projects"
            className="mt-8 rounded-none border border-brand bg-transparent px-9 py-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand hover:bg-brand hover:text-white"
          >
            Read More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
