import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/forma-hero/1920/1080)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 lg:py-36">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-900/40 px-4 py-1.5 text-sm font-medium text-primary-300">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400" aria-hidden="true" />
          Award-Winning Design Studio
        </p>
        <h1
          className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Transforming Spaces Into Extraordinary Experiences
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
          Forma is a full-service interior design studio. We craft timeless residential, commercial,
          and hospitality interiors that balance beauty, function, and craft.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="#contact" className="rounded-full px-8 py-3 text-base">
            Book a Consultation
          </ButtonLink>
          <ButtonLink
            href="#portfolio"
            variant="outline"
            className="rounded-full border-white/40 px-8 py-3 text-base text-white hover:bg-white/10 dark:border-gray-500"
          >
            View Our Work
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
