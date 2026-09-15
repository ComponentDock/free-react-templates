import { ArrowRight } from 'lucide-react'

const slides = [
  {
    image: 'https://picsum.photos/seed/stratum-hero1/1200/600',
    title: 'Welcome to Stratum',
    subtitle: 'Powering the future of mining with innovation and expertise across every terrain.',
  },
  {
    image: 'https://picsum.photos/seed/stratum-hero2/1200/600',
    title: 'New Generation of Mining',
    subtitle: 'Advanced extraction methods that deliver sustainable and efficient results.',
  },
]

export function HeroSlider() {
  return (
    <section id="home" className="relative">
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={`relative h-[80vh] min-h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center ${i === 0 ? 'block' : 'hidden'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-heading uppercase mb-4">{slide.title}</h1>
            <p className="text-lg mb-8 text-white/90">{slide.subtitle}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </section>
  )
}
