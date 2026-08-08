import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section
      aria-label="Call to action"
      className="relative overflow-hidden bg-gray-900 py-20 lg:py-24 dark:bg-gray-950"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Ship Better APIs?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Join 1M+ developers building production-ready APIs with Endpoint. Get started free — no
          credit card required.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="#contact" className="rounded-full px-8 py-3 text-base">
            Get Free API Key
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="outline"
            className="rounded-full border-white/30 px-8 py-3 text-base text-white hover:bg-white/10 dark:border-gray-600"
          >
            Talk to Sales
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
