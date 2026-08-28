import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/tillman-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Agricultural solution
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          High-performing products that keep large turf areas beautiful and healthy — while saving
          you time, water and energy.
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-full bg-leaf-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-leaf-500"
        >
          Explore Our Services
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
