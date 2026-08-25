import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[650px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/crest-hero/1920/800)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-32">
        <h1 className="max-w-2xl text-5xl font-bold leading-tight text-white md:text-6xl">
          Get the help you need, every step of the way
        </h1>
        <p className="max-w-lg text-lg text-white/80">
          Design better websites and spend less with Essentials.
        </p>
        <div>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-[5px] bg-brand px-14 py-4 text-base font-semibold text-white transition-all hover:bg-navy"
          >
            Get Started
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
      <img
        src="https://picsum.photos/seed/crest-shape/600/600"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 hidden w-[45%] opacity-80 lg:block"
      />
    </section>
  )
}
