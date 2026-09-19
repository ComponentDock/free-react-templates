import { ArrowRight } from 'lucide-react'

const slides = [
  {
    tagline: 'Fresh Flower & Gift Shop',
    heading: 'Making beautiful flowers a part of your life.',
    cta: 'Shop now',
    image: 'https://picsum.photos/seed/bloomfield-hero1/1600/800',
  },
  {
    tagline: 'Fresh Flower & Gift Shop',
    heading: 'Making beautiful flowers a part of your life.',
    cta: 'Shop now',
    image: 'https://picsum.photos/seed/bloomfield-hero2/1600/800',
  },
]

const hero = slides[0]!

export function Hero() {
  return (
    <section id="home" className="relative h-[500px] overflow-hidden bg-gray-900 sm:h-[600px]">
      {/* Background image (first slide) */}
      <img
        src={hero.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
        <div className="max-w-lg">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[4px] text-bloom-300">
            {hero.tagline}
          </span>
          <h1
            className="mb-6 text-4xl font-normal leading-snug text-white sm:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {hero.heading}
          </h1>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full bg-bloom-400 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-bloom-500"
          >
            {hero.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
