import { aboutCards, aboutImage } from '../data'

export function About() {
  return (
    <section id="about" aria-label="About" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-thin text-ink md:text-5xl">
            How <span className="font-light text-brand">Vinyasa</span> can change your life
          </h1>
          <p className="mt-5 leading-relaxed text-muted">
            Vinyasa is a studio built around consistent, joyful movement — flow classes, honest
            coaching, and a community that keeps you coming back.
          </p>
        </div>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <img
            src={aboutImage}
            alt=""
            loading="lazy"
            className="hidden h-[520px] w-full object-cover lg:block"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {aboutCards.map((card) => (
              <article key={card.title}>
                <h3 className="text-lg font-medium text-ink">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
