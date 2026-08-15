import { features } from '../data'

export function Features() {
  return (
    <section className="bg-gradient-to-br from-brand-light to-brand py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="bg-white p-10">
            <h2 className="text-lg font-semibold uppercase tracking-[2px] text-ink">
              {feature.title}
            </h2>
            <p className="mt-5 text-sm font-light leading-6 text-muted">{feature.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
