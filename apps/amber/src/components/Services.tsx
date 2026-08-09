import { Scissors } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  { name: 'Men’s Facial', price: '$15' },
  { name: 'Clean Cut', price: '$15' },
  { name: 'Close Shave', price: '$15' },
  { name: 'Razor Cut', price: '$15' },
  { name: 'Face Massage', price: '$15' },
  { name: 'Classic haircut', price: '$15' },
  { name: 'Haircut and shampoo', price: '$15' },
  { name: 'Hair treatment', price: '$15' },
  { name: 'Beard trimming', price: '$15' },
  { name: 'Beard and moustache', price: '$15' },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Price List
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            our service
          </h2>
        </div>
        <ul className="mt-14 grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.name}
              className="flex items-center gap-4 rounded-xl bg-white px-6 py-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Scissors className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-1 font-medium text-ink dark:text-white">{service.name}</span>
              <span className="font-display text-lg font-bold text-brand">{service.price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <ButtonLink
            href="#contact"
            className="rounded-lg bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
          >
            Make an Appointment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
