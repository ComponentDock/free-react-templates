import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center lg:min-h-[600px]"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/guideway-hero/1600/900)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-brand">
          Welcome to Guideway
        </span>
        <h1 className="mb-6 max-w-2xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          We Are The Best Consulting Agency
        </h1>
        <ButtonLink
          href="#services"
          className="inline-flex items-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Our Services
        </ButtonLink>
        {/* Carousel indicators */}
        <div className="mt-8 flex gap-2">
          <span className="h-2 w-8 rounded-full bg-brand" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  )
}
