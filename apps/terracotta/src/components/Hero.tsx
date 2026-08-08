import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-coal">
      <img
        src="https://picsum.photos/seed/terracotta-hero/1600/900"
        alt="Modern building facade with angular white geometry"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-40">
        <p className="text-sm font-bold uppercase tracking-[3px] text-brand">
          Architecture + Design
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-tight text-white sm:text-6xl">
          Terracotta Latest Project
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <ButtonLink
          href="#project"
          className="mt-10 rounded-[5px] bg-brand px-8 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
        >
          Learn More
        </ButtonLink>
      </div>
    </section>
  )
}
