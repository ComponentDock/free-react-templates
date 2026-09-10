import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-charcoal bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/dialpad-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-charcoal/90" />
      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70">
          Discover the Colorful World
        </p>
        <h1 className="mt-4 text-5xl font-bold leading-tight text-white sm:text-6xl">
          Efficiency Booster
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
          We deliver exceptional call center solutions that streamline your customer support
          operations and boost satisfaction across every touchpoint.
        </p>
        <Button className="mt-8 rounded-full bg-gradient-to-r from-sky to-brand px-8 py-3 text-xs font-medium uppercase tracking-wider text-white hover:opacity-90">
          Discover Now
        </Button>
      </div>
    </section>
  )
}
