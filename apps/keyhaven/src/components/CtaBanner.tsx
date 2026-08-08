import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-700 py-20 lg:py-28">
      {/* Subtle 20px grid-pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Find Your Dream Home?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
          Our team of experts is ready to help you navigate the market and find the perfect
          property.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#properties"
            className="h-auto rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-700 hover:bg-primary-50"
          >
            Browse Properties
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className="h-auto rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10"
          >
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
