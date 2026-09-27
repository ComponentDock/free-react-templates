import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(https://picsum.photos/seed/unfurl-hero/1920/1080)`,
      }}
    >
      <div className="text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Unfurl
        </h1>
        <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          I'm Glenn Chapman Hoyer — A Product Designer Based In San Francisco
        </p>
      </div>

      <a
        href="#portfolio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
