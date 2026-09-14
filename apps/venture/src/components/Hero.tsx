import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/venture-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#010E21]/90 to-[#010E21]/70" />
      <div className="relative z-10 container mx-auto px-6 lg:px-20 pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Business Synergy via
              <br />
              Robust Strategies
            </h1>
            <p className="text-[#a6b3c6] text-lg mb-8 max-w-lg">
              Empowering businesses with strategic planning and innovative solutions. We help you
              navigate the complex landscape of modern commerce.
            </p>
            <a
              href="#works"
              className="inline-flex items-center text-white text-lg font-medium hover:text-[#04dbec] transition-colors group"
            >
              View project
              <ArrowRight
                className="ml-3 text-[#04dbec] group-hover:translate-x-1 transition-transform"
                size={32}
              />
            </a>
          </div>
          <div className="lg:w-1/2 hidden lg:block">
            <img
              src="https://picsum.photos/seed/venture-hero-img/600/400"
              alt="Business strategy illustration"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
