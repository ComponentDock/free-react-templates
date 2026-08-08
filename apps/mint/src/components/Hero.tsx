import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-coal">
      <img
        src="https://picsum.photos/seed/mint-hero/1600/900"
        alt="Bright living room with teal accents"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-brand/30 mix-blend-multiply" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-32 text-center sm:px-6 sm:py-44">
        <p className="text-sm font-bold uppercase tracking-[4px] text-white/80">
          Interior Design Studio
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-black uppercase leading-tight text-white sm:text-6xl">
          Experience Interior Design
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <ButtonLink
          href="#service"
          className="mt-10 rounded-full bg-brand px-10 py-4 font-sans text-sm font-bold uppercase tracking-wide text-ink hover:bg-brand-dark hover:text-white"
        >
          Get Started
        </ButtonLink>
      </div>
    </section>
  )
}
