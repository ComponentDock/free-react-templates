import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-dark bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/sweatly-hero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
          Fitness Help Me Feel Better
        </h1>
        <p className="mx-auto mb-8 mt-4 max-w-[700px] text-xl leading-relaxed text-white">
          Push your limits with expert coaching, modern equipment, and a community that shows up
          every day. Your transformation starts here.
        </p>
        <ButtonLink
          href="#classes"
          variant="outline"
          className="border-2 border-white px-8 py-3 text-xs font-black uppercase tracking-wide text-white hover:border-white hover:bg-white hover:text-ink-dark"
        >
          Get Started
        </ButtonLink>
      </div>
    </section>
  )
}
