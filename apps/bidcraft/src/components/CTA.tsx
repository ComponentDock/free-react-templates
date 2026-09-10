import { ButtonLink } from '@free-react-templates/ui'

export function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-20" aria-label="Call to action">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Create an account and start Buy, Bid or Sell Now!
        </h2>
        <div className="mt-8">
          <ButtonLink
            href="#home"
            className="inline-block bg-primary-400 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-500"
          >
            Register
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
