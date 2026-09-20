import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/seminar-hero/1920/1080"
          alt="Conference venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Conference 2024
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Web Design Conference 2024
        </h1>
        <p className="text-text text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          September 6th-7th, 2024 &middot; Portland, Oregon
        </p>
        <ButtonLink
          href="#tickets"
          className="inline-block bg-gradient-to-r from-primary-700 to-primary-400 text-white px-10 py-4 rounded text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary-700/30"
        >
          Buy Tickets
        </ButtonLink>
      </div>
    </section>
  )
}
