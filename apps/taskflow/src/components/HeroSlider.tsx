import { ArrowRight } from 'lucide-react'

const slides = [
  {
    heading: 'Strategic Design for Brands',
    subheading: 'We craft memorable brand experiences that connect.',
    image: 'https://picsum.photos/seed/taskflow-hero1/1600/900',
  },
  {
    heading: 'Creators of Digital Experiences',
    subheading: 'Building the future, one pixel at a time.',
    image: 'https://picsum.photos/seed/taskflow-hero2/1600/900',
  },
  {
    heading: 'Design & Develop Functional Sites',
    subheading: 'Beautiful design meets powerful technology.',
    image: 'https://picsum.photos/seed/taskflow-hero3/1600/900',
  },
]

export function HeroSlider() {
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-gray-900">
      {slides.map((slide, i) => (
        <div
          key={slide.heading}
          className={`absolute inset-0 ${i === 0 ? 'relative' : 'hidden'}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center px-8">
            <div className="max-w-2xl text-center">
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {slide.heading}
              </h2>
              <p className="mb-8 text-lg text-white/80">{slide.subheading}</p>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-[2px] bg-brand-400 px-6 py-3 text-[12px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-brand-500"
              >
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
