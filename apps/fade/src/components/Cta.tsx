import { CalendarCheck, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section
      aria-label="Call to action"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready for Your Best Cut Yet?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
          Walk-ins welcome, but appointments are recommended. Book your chair today and experience
          the Fade difference.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#contact"
            className="rounded-lg bg-accent-500 px-8 py-4 text-base font-medium text-gray-900 hover:bg-accent-400"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book Now
          </ButtonLink>
          <ButtonLink
            href="tel:5557412580"
            variant="outline"
            className="rounded-lg border-2 border-gray-600 px-8 py-4 text-base text-white hover:border-gray-500 hover:bg-white/5"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call (555) 741-2580
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
