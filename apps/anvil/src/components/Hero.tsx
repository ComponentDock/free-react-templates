import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-coal">
      <img
        src="https://picsum.photos/seed/anvil-hero/1600/900"
        alt="Industrial site with steel structures"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-40">
        <p className="font-mono text-sm font-medium uppercase tracking-[3px] text-brand">
          Anvil / Industrial Solutions
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold uppercase leading-tight text-white sm:text-6xl">
          Specialized Technical Solutions
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink
            href="#contact"
            className="rounded-[5px] bg-brand px-8 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
          >
            Get In Touch
          </ButtonLink>
          <ButtonLink
            href="#projects"
            variant="outline"
            className="rounded-[5px] border-white/40 bg-transparent px-8 font-sans text-sm font-semibold uppercase text-white hover:border-white hover:bg-white hover:text-coal"
          >
            Download
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
