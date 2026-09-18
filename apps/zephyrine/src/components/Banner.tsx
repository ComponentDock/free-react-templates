import { ArrowRight } from 'lucide-react'

export function Banner() {
  return (
    <section
      className="py-24 md:py-36"
      style={{ background: 'linear-gradient(0deg, #e66587, #f09458)' }}
    >
      <div className="max-w-[68.75%] mx-auto text-center px-4">
        <p className="text-white/90 text-sm font-medium uppercase tracking-widest mb-4">
          Re-imagining the way
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-semibold uppercase leading-tight mb-8">
          We grow money, Guaranteed
        </h1>
        <a
          href="#get-started"
          className="inline-flex items-center gap-2 bg-white text-[#e66686] font-medium px-8 py-3 rounded-[20px] hover:bg-gray-100 transition-colors text-sm"
        >
          Get Started
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
