import { ButtonLink } from '@free-react-templates/ui'

const offerings = [
  {
    number: '01',
    name: 'Manicure & Pedicure',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    number: '02',
    name: 'Haircut & Coloring',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    number: '03',
    name: 'Professional Makeup',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    number: '04',
    name: 'Body Spa',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            The beauty is not luxurious imagination
          </h2>
          <p className="mt-4 text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering) => (
            <li
              key={offering.number}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950"
            >
              <span className="font-script text-4xl text-blush">{offering.number}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{offering.name}</h3>
              <p className="mt-2 flex-1 text-sm text-mist dark:text-white/60">{offering.copy}</p>
              <ButtonLink
                href="#booking"
                className="mt-6 inline-flex self-start rounded-full bg-brand px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
              >
                Explore
              </ButtonLink>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
