import { hero } from '../data'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Light background with a soft periwinkle glow behind the photo. */}
      <div className="absolute inset-0 bg-white" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
        <div>
          <span className="relative inline-block rounded-lg bg-periwinkle px-5 py-3 text-base font-medium text-white">
            {hero.bubble}
            <span
              className="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 bg-periwinkle"
              aria-hidden="true"
            />
          </span>
          <h1 className="mt-8 font-sans text-5xl font-bold leading-[1.1] text-ink lg:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-6 max-w-[390px] font-body text-3xl leading-[1.4] text-body">
            {hero.roleLead}
            <span className="text-brand">{hero.roleHighlight1}</span>
            {hero.roleMiddle}
            <span className="text-periwinkle">{hero.roleHighlight2}</span>
          </p>
          <a
            href="#contact"
            className="mt-12 inline-flex items-center rounded-full border border-brand bg-brand px-[52px] py-3.5 font-sans text-base font-semibold text-white transition-colors hover:bg-white hover:text-brand"
          >
            {hero.cta}
          </a>
        </div>

        <div className="relative hidden md:block">
          <div
            className="absolute -right-4 -top-4 h-full w-full rounded bg-periwinkle/90"
            aria-hidden="true"
          />
          <img
            src="https://picsum.photos/id/996/600/800"
            alt="Kenedy Jackson portrait"
            className="relative h-auto w-full rounded"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
