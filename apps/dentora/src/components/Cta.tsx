import { CalendarCheck, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section
      aria-label="Dental emergency"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Dental Emergency? We're Here for You
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">
          Same-day emergency appointments available. Our team is ready to provide immediate relief
          and expert care when you need it most.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="tel:5552345678"
            className="rounded-full bg-white px-8 py-4 text-base font-medium text-primary-700 hover:bg-primary-50"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Now
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className="rounded-full border-2 border-white/40 px-8 py-4 text-base text-white hover:border-white/70 hover:bg-white/10"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book Online
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
