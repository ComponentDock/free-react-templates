import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden bg-charcoal">
          <img
            src="https://picsum.photos/seed/cantilever-about-1/800/600"
            alt="Inside the Cantilever studio"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h6 className="text-xs font-bold uppercase tracking-widest text-brand">
            Welcome to Cantilever
          </h6>
          <h2 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl dark:text-white">
            Precise Concept Design for Unique Stylish Living Alone
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-mist dark:text-white/60">
            From first sketch to final build, our studio pairs structural precision with a refined
            sense of proportion. Every project starts with a concept — a clear idea about how a
            space should feel, flow, and endure.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-white/60">
            We believe good architecture is quiet: it frames daily life without shouting. Our
            designs favour honest materials, generous natural light, and details that reward
            attention over time.
          </p>
          <ButtonLink
            href="#services"
            className="mt-8 rounded bg-brand px-8 py-4 text-xs font-bold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            More About Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
