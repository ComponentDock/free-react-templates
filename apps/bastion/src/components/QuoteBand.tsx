import { ButtonLink } from '@free-react-templates/ui'

export function QuoteBand() {
  return (
    <section className="bg-charcoal py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
          Let&apos;s talk
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
          Get started
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Tell us about your project and we&apos;ll put together a tailored quote within two working
          days.
        </p>
        <ButtonLink href="#contact" className="mt-8 bg-brand text-charcoal hover:bg-accent">
          Request a quote
        </ButtonLink>
      </div>
    </section>
  )
}
