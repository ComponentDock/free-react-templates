import { ABOUT } from '../data'

export function About() {
  return (
    <section id="about" className="bg-offwhite py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl font-bold text-dark">{ABOUT.heading}</h2>
          <div className="mt-2 h-1 w-16 bg-brand" />
          <p className="mt-6 leading-relaxed text-muted">{ABOUT.paragraph}</p>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src={ABOUT.image}
            alt="Sovereign Hotel lobby"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
