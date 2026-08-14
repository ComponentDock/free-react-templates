import { heroCopy } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/slugger-hero/1600/1000')" }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <h1 className="max-w-2xl font-display text-5xl font-black uppercase leading-tight text-white md:text-7xl">
          Fieldrun Baseball Club
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{heroCopy}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#games"
            className="rounded bg-accent px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black"
          >
            Watch match
          </a>
          <a
            href="#games"
            className="rounded bg-brand px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black"
          >
            Get ticket
          </a>
        </div>
      </div>
    </section>
  )
}
