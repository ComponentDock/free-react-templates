import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[540px] items-center justify-center overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-400 opacity-85" />
      <div className="relative z-10 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/80">
          Your best partner
        </p>
        <h1 className="mb-6 text-5xl font-light text-white md:text-6xl">Shotwise</h1>
        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-primary-800"
        >
          Get Started
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
