import { SkewedButton } from './SkewedButton'

export function Hero() {
  return (
    <section
      className="bg-navy bg-cover bg-center px-4 py-[120px] md:py-[180px]"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/drayage-hero/1920/900)' }}
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl bg-navy/60 p-8 md:p-10">
          <span className="font-display text-xl font-bold uppercase tracking-[4px] text-white">
            Freight broker
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.2] text-white md:text-5xl md:leading-[70px]">
            Awesome template for courier &amp; delivery services
          </h1>
          <p className="mt-5 max-w-xl font-body text-white/90">
            Move anything, anywhere — air, ocean, rail, and road freight managed by one accountable
            team.
          </p>
          <SkewedButton href="#services" className="mt-8">
            View services
          </SkewedButton>
        </div>
      </div>
    </section>
  )
}
