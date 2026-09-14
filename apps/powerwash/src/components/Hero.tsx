import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/powerwash-hero/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10 flex justify-end">
        <div className="w-full md:w-1/2 text-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Professional{' '}
            <span className="border-2 border-dashed border-accent-400 text-accent-400 px-1">
              Pressure
            </span>{' '}
            <span className="border-2 border-dashed border-accent-400 text-accent-400 px-1">
              Washing
            </span>{' '}
            Services
          </h1>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Learn more <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
