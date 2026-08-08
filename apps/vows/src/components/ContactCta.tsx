import { ButtonLink } from '@free-react-templates/ui'

export function ContactCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Create Your Perfect Day
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Schedule your complimentary consultation and let us begin crafting a celebration as
            unique and beautiful as your love story.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="mailto:hello@vows.example.com"
              className="rounded-full bg-white px-8 py-3.5 text-base font-medium text-primary-700 transition-colors hover:bg-gray-100"
            >
              Schedule Consultation
            </ButtonLink>
            <ButtonLink
              href="tel:+15551234567"
              className="rounded-full border border-white/60 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Call Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
