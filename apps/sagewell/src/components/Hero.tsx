export function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/sagewell-hero/1600/900"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-400/90 to-navy-800/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Boost up your skills with a new way of learning.
          </h1>
          <div className="flex gap-4">
            <a
              href="#admission"
              className="bg-brand-400 text-white px-8 py-3 rounded-full font-medium hover:bg-brand-500 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#programs"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-navy-800 transition-colors"
            >
              Take a Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
