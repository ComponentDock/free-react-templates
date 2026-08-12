import { features } from '../data'

export function Features() {
  return (
    <section id="features" className="bg-lavender-50 py-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-[75px] max-w-[720px] text-center">
          <h2 className="font-display text-4xl font-bold text-ink-900">Our Top Rated Features</h2>
          <p className="mt-4 text-sm leading-6 text-ink-600">
            A focused set of capabilities that makes every Vantage project dependable, polished, and
            built to last.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="px-5 py-15">
              <h3 className="text-xl font-medium text-ink-900">{feature.title}</h3>
              <p className="mt-4 text-sm leading-6 text-ink-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
