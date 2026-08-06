import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-teal via-ocean to-navy py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          Welcome To Massive App Store.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-teal-50">
          Rapidiously monetize market-driven web services. Completely synthesize end-to-end models
          and emerging niches. Continually visualize long-term high-impact niches without ubiquitous
          methodologies.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#download"
            className="rounded-full bg-white px-10 py-3.5 text-ocean hover:bg-teal-50"
          >
            Get App Now
          </ButtonLink>
          <ButtonLink
            href="#features"
            className="rounded-full border border-white/60 bg-transparent px-10 py-3.5 text-white hover:bg-white/10"
          >
            Discover More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
