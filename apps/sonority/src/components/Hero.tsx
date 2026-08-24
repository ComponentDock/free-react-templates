import { Monitor, Smartphone } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#161a1a] to-[rgba(38,41,41,0.99)] pt-32 pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-blue">
          Intuitive. Powerful. Runs everywhere
        </p>
        <h1 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Open the world of music.
          <br />
          It&apos;s all here.
        </h1>
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ca42f2] via-[#6a42f2] to-brand-blue px-8 py-3 text-sm font-semibold uppercase text-white shadow-lg transition-all hover:opacity-90"
          >
            <Monitor size={18} />
            Download For Desktop
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            <Smartphone size={18} />
            Download For Mobile
          </a>
        </div>
        <div className="mx-auto max-w-3xl">
          <img
            src="https://picsum.photos/seed/sonority-hero/800/450"
            alt="Sonority desktop app screenshot"
            className="w-full rounded-xl shadow-2xl"
            width={800}
            height={450}
          />
        </div>
      </div>
    </section>
  )
}
