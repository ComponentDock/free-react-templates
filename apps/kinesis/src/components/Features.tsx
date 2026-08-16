import { features } from '../data'

/* Three membership-feature cards, each with a colored icon square, an
   uppercase title and a short blurb. */
export function Features() {
  return (
    <section
      aria-label="Free fitness features"
      className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="px-4 text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center bg-primary text-white">
              <feature.icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-xl font-bold uppercase text-heading">
              {feature.title}
            </h3>
            <p className="mt-3 leading-relaxed text-neutral-600">{feature.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
