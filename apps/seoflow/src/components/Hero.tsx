import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-brand-navy to-[#0a2a4a] text-white overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              BoostUp your Business &amp; Get top of Search Engine
            </h1>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-brand-pink text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-pink-600 transition-colors"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://picsum.photos/seed/seoflow-hero/600/400"
              alt="SEO analytics illustration"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
