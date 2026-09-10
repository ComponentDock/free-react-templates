import { about } from '../data'

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
        <img
          src={about.image}
          alt="Fleetly car rental fleet"
          className="w-full object-cover"
          loading="lazy"
        />
        <div className="px-4 py-16 lg:px-16">
          <h2 className="text-3xl font-bold text-text md:text-4xl">{about.heading}</h2>
          <p className="mt-2 text-sm text-text-light">{about.subtitle}</p>
          <p className="mt-5 leading-relaxed text-text-light">{about.description}</p>
          <a
            href="#cars"
            className="mt-8 inline-block rounded-[3px] bg-brand px-10 py-3 text-sm font-medium text-white uppercase transition-colors hover:bg-brand-dark"
          >
            {about.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
