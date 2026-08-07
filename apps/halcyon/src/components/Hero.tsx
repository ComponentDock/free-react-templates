import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-slate"
    >
      <img
        src="https://picsum.photos/seed/halcyon-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 pb-20 pt-32 text-center sm:px-6">
        <h1 className="font-serif text-4xl font-bold text-white sm:text-6xl">Spa Which You Love</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Relax, restore, and renew with our signature treatments — a sanctuary of calm designed
          around you.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#about"
            className="rounded-full bg-brand px-8 py-3 font-bold text-white hover:bg-brand-dark"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
