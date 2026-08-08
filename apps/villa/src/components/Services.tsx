import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    title: 'Reasons To Choose Notebook',
    body: 'Here, I focus on a range of items and features that we use in life without giving them a second thought. Such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Reasons To Choose Notebook',
    body: 'Here, I focus on a range of items and features that we use in life without giving them a second thought. Such as Coca Cola. Dolor sit amet, consectetur.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-24 dark:bg-gray-950 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-light text-ink dark:text-white sm:text-4xl">
          Our <span className="font-bold text-brand-dark">Offred</span> Services
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={index}
              className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900"
            >
              <h3 className="font-display text-2xl font-light text-ink dark:text-white">
                Reasons To <span className="font-bold">Choose Notebook</span>
              </h3>
              <p className="mt-4 leading-relaxed text-mist dark:text-white/60">{service.body}</p>
              <ButtonLink
                href="#contact"
                className="mt-6 rounded-full bg-brand px-6 text-sm font-bold uppercase text-white hover:bg-brand-dark"
              >
                Learn More
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
