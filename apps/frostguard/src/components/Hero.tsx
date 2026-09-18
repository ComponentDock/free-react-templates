import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/frostguard-hero-1/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="font-['Saira_Condensed'] text-4xl md:text-6xl font-bold mb-4 max-w-3xl">
          Keeping your home comfortable all year long
        </h1>
        <p className="font-['Mulish'] text-lg md:text-xl mb-8 max-w-2xl opacity-90">
          Professional air conditioning maintenance, repair, and installation services you can
          trust.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#FAD110] text-[#142336] font-['Saira_Condensed'] font-bold text-lg px-8 py-3 rounded-[60px] hover:bg-[#e6be0e] transition-colors"
        >
          Contact us
        </a>
      </div>
      {/* Carousel arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  )
}
