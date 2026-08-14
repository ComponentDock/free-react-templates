import { hero } from '../data'

/** Split hero on the #f9f9ff band: eyebrow, huge uppercase name headline,
 *  intro paragraph, gradient CTA, and a portrait framed by a soft
 *  light-blue square border on the right. */
export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="bg-band pt-32 lg:pt-40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-20 lg:flex-row lg:justify-between">
        <div className="max-w-xl">
          <h6 className="text-sm font-normal uppercase tracking-[2px] text-ink">{hero.eyebrow}</h6>
          <h1 className="mt-5 text-5xl font-semibold uppercase leading-tight text-ink lg:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-6 text-base font-light leading-relaxed text-muted">{hero.intro}</p>
          <a
            href="#about"
            className="mt-8 inline-block bg-gradient-to-br from-primary to-accent px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            {hero.cta}
          </a>
        </div>
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -inset-6 rotate-[-6deg] rounded-sm border-[10px] border-primary/40"
          />
          <img
            src={hero.portrait}
            alt={hero.alt}
            width={520}
            height={640}
            className="relative h-auto w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}
