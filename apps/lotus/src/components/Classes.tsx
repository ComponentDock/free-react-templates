import { classes } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function Classes() {
  return (
    <section id="classes" aria-label="Yoga classes" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-ink md:text-4xl">All in one Yoga classes</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Every class combines movement, breath, and coaching — choose the path that fits you.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {classes.map((item) => (
            <article key={item.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink
            href="#schedule"
            className="rounded bg-brand px-6 py-4 text-base text-ink hover:bg-brand-dark"
          >
            Explore our classes
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
