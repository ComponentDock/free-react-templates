import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/turfly-hero/1600/900')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center px-4 py-24 sm:px-6 lg:min-h-[600px] lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary-400">
            Welcome to Turfly
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Lawn care for everyone
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-200">
            Professional lawn care and landscaping services to keep your outdoor spaces looking
            their best all year round. Trusted by hundreds of happy homeowners.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink
              href="#services"
              className="rounded bg-primary-400 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Our Services
            </ButtonLink>
            <ButtonLink
              href="#contact"
              className="rounded border border-white bg-transparent px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
