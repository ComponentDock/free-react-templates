import { CalendarCheck, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/60 px-4 py-1.5 text-sm font-medium text-accent-400">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
          Brooklyn's premier barbershop
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Crafting Style, <span className="text-accent-400">Building Confidence</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400 sm:text-xl">
          Where classic craftsmanship meets modern style. Expert barbers, premium products, and an
          experience you'll look forward to every time.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#contact"
            className="rounded-lg bg-accent-500 px-8 py-4 text-base font-medium text-gray-900 hover:bg-accent-400"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book Appointment
          </ButtonLink>
          <ButtonLink
            href="tel:5557412580"
            variant="outline"
            className="rounded-lg border-gray-600 px-8 py-4 text-base text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call (555) 741-2580
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
