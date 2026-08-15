import { pricing } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing plans" className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-ink md:text-4xl">Pricing Plan</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Simple per-class pricing — no memberships, no fine print.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pricing.map((item) => (
            <article key={item.plan} className="bg-white p-10 text-center shadow-sm">
              <h3 className="text-xl font-medium text-ink">{item.plan}</h3>
              <p className="mt-4 leading-relaxed text-muted">{item.copy}</p>
              <p className="mt-8">
                <span className="text-5xl font-medium text-ink">{item.price}</span>
                <span className="ml-2 text-muted">per class</span>
              </p>
              <ButtonLink
                href="#contact"
                className="mt-8 rounded bg-brand px-6 py-3 text-base text-ink hover:bg-brand-dark"
              >
                Book now
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
