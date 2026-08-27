import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] min-h-[900px] flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/stride-hero/1920/1080"
        alt="Gym background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          We Believe Little Things Matter
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-[700px] mx-auto leading-relaxed">
          Join the movement that transforms lives through fitness, dedication, and community. Every
          rep counts.
        </p>
        <a
          href="#contact"
          className="inline-block border-2 border-white text-white px-10 py-3 font-semibold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors"
        >
          Get Started <ArrowRight className="inline ml-2 w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
