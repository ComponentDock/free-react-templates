import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Close More Deals?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
          Join 10,000+ sales teams already using Dealflow to supercharge their sales process. Start
          your free trial today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#contact"
            className="w-full rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary-700 hover:bg-primary-50 sm:w-auto"
          >
            Start Free Trial
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className="w-full rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
          >
            Book a Demo
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
