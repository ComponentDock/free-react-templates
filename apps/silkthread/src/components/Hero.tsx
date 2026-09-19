import { ArrowRight } from 'lucide-react'

const slides = [
  {
    subtitle: 'Summer Collection',
    heading: 'Fall - Winter Collections 2030',
    description:
      'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.',
    image: 'https://picsum.photos/seed/silkthread-hero1/1920/800',
  },
  {
    subtitle: 'Summer Collection',
    heading: 'Fall - Winter Collections 2030',
    description:
      'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.',
    image: 'https://picsum.photos/seed/silkthread-hero2/1920/800',
  },
]

export function Hero() {
  const slide = slides[0]!

  return (
    <section
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label="Hero carousel"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white/80">
            {slide.subtitle}
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            {slide.heading}
          </h1>
          <p className="mb-8 text-lg text-white/80">{slide.description}</p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand"
          >
            Shop now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
