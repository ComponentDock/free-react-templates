import { heroHeading, heroSubtitle, heroCTAs } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/sprout-hero/1920/800)',
      }}
    >
      <div className="px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl md:text-6xl">
          {heroHeading}
        </h1>
        <p className="mb-8 text-lg text-gray-200 sm:text-xl">{heroSubtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {heroCTAs.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className="inline-block rounded-none bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-hover"
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
