import { trainers } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function Trainers() {
  return (
    <section id="trainers" aria-label="Meet our trainers" className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-ink md:text-4xl">Meet our trainers</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Certified coaches who teach with care, patience, and an eye for detail.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="bg-white p-8 text-center shadow-sm">
              <img
                src={trainer.image}
                alt={trainer.name}
                loading="lazy"
                className="mx-auto h-48 w-48 rounded-full object-cover"
              />
              <h3 className="mt-6 text-xl font-medium text-ink">{trainer.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-widest text-brand-dark">
                {trainer.role}
              </p>
              <p className="mt-4 leading-relaxed text-muted">{trainer.copy}</p>
              <ButtonLink
                href="#schedule"
                className="mt-6 rounded bg-brand px-6 py-3 text-base text-ink hover:bg-brand-dark"
              >
                View class times
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
