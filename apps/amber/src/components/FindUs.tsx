import { Mail, MapPin, Phone, Users } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const cards = [
  {
    title: 'Location',
    line: '200, A-block, Green road, USA',
    Icon: MapPin,
  },
  {
    title: 'Call Us',
    line: '+10 378 478 2789',
    Icon: Phone,
  },
  {
    title: 'Mail Us',
    line: 'contact@barbershop.com',
    Icon: Mail,
  },
  {
    title: 'Join With Us',
    line: 'Become part of the crew',
    Icon: Users,
  },
] as const

export function FindUs() {
  return (
    <section
      id="contact"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Contact
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            How to Find Us
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ title, line, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-mist dark:text-gray-400">{line}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink
            href="#contact"
            className="rounded-lg bg-brand px-10 uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
          >
            Make Appointment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
