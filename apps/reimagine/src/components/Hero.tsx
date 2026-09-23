import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[600px] text-center text-white"
      style={{ background: 'linear-gradient(0deg, #e66587 0%, #f09458 100%)' }}
    >
      <div className="max-w-2xl px-4">
        <p className="uppercase text-xs tracking-[0.2em] mb-4 font-light">Re-imagining the way</p>
        <h1 className="text-4xl md:text-5xl font-semibold uppercase leading-tight mb-8">
          We grow money, Guaranteed
        </h1>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-medium transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(0deg, #e66587 0%, #f09458 100%)' }}
        >
          Get Started <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
