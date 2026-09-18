const SLIDES = [
  {
    heading: 'We serve Fresh Vegetables & Fruits',
    subheading: 'Delivering organic goodness right to your doorstep',
    image: 'https://picsum.photos/seed/greenplate-hero1/1200/500',
  },
  {
    heading: '100% Organic Food For Your Family',
    subheading: 'Healthy, fresh, and sustainably sourced produce',
    image: 'https://picsum.photos/seed/greenplate-hero2/1200/500',
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden" data-testid="hero">
      <div className="hero-carousel">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="hero-slide"
            style={{
              position: i === 0 ? 'relative' : 'absolute',
              inset: 0,
              animationDelay: `${i * 5}s`,
            }}
          >
            <img src={slide.image} alt={slide.heading} className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">{slide.heading}</h1>
                <p className="text-lg md:text-xl mb-6 opacity-90">{slide.subheading}</p>
                <a
                  href="#products"
                  className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded transition-colors font-medium"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .hero-carousel { position: relative; width: 100%; }
        .hero-slide { opacity: 0; animation: fadeSlide 10s infinite; }
        .hero-slide:nth-child(1) { animation-delay: 0s; }
        .hero-slide:nth-child(2) { animation-delay: 5s; }
        @keyframes fadeSlide {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
