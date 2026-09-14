import { ArrowRight } from 'lucide-react'

const slides = [
  {
    subtitle: 'Welcome & Enjoy',
    heading: "Hello! I'm Simon, an illustrator from London",
    image: 'https://picsum.photos/seed/packr-hero1/1600/900',
  },
  {
    subtitle: 'Building Site',
    heading: 'We Build Modern & Functional Websites',
    image: 'https://picsum.photos/seed/packr-hero2/1600/900',
  },
  {
    subtitle: 'Work',
    heading: 'Handcrafted Design For The Digital World',
    image: 'https://picsum.photos/seed/packr-hero3/1600/900',
  },
] as const

export function Hero() {
  const slide = slides[0]

  return (
    <section id="home" className="relative flex min-h-[700px] items-center bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt="Creative workspace with design tools"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <p className="font-mono text-sm uppercase tracking-[0.5em] text-white/60">
            {slide.subtitle}
          </p>
          <h1 className="mt-6 font-mono text-3xl font-normal leading-snug sm:text-4xl lg:text-5xl">
            {slide.heading}
          </h1>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded bg-brand px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
          >
            Available For Hire!
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
