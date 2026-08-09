import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-fog dark:bg-gray-900"
    >
      <img
        src="https://picsum.photos/seed/serenity-hero-1/1920/1280"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-950/70" />

      <div className="relative mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">
          Relax · Rejuvenate · Restore
        </span>
        <h1 className="mt-6 font-display text-4xl uppercase leading-tight tracking-[0.18em] text-ink sm:text-5xl dark:text-white">
          Spa & Beauty Center
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-brand" aria-hidden="true" />
        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-mist dark:text-white/70">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#contact"
            className="rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Get in Touch
          </ButtonLink>
          <ButtonLink
            href="#about"
            variant="outline"
            className="rounded-full border-ink/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] hover:border-brand hover:text-brand dark:border-white/40"
          >
            Contact
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
