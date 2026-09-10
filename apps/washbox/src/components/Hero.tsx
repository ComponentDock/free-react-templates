import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/washbox-hero/1920/1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1
            className="text-5xl sm:text-7xl lg:text-[124px] font-extrabold leading-none mb-4 font-[Poppins]"
            style={{ color: '#ffffff' }}
          >
            Car Wash
          </h1>

          <div className="mb-6">
            <h2
              className="text-5xl sm:text-7xl lg:text-[120px] font-extrabold leading-none uppercase animate-stroke-fill"
              style={{ WebkitTextStroke: '2px #ffffff', color: 'transparent' }}
            >
              &amp; Detailing
            </h2>
          </div>

          <p className="text-white/80 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            Professional car wash and detailing services with the latest equipment. Your vehicle
            deserves the best care and attention to detail.
          </p>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[30px] text-white font-semibold text-sm transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)',
            }}
          >
            Our Services
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
