import { Button, ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'Get slim and toned with yoga',
    subtext: 'Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more',
    image: 'https://picsum.photos/seed/aurae-hero1/1600/900',
  },
  {
    heading: 'Reduce your stress',
    subtext: 'Find your inner peace through guided meditation and mindful movement practices',
    image: 'https://picsum.photos/seed/aurae-hero2/1600/900',
  },
] as const

export function Hero() {
  const slide = slides[0]

  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt="Yoga practice in a peaceful studio"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {slide.heading}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">{slide.subtext}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink
              href="#classes"
              className="rounded bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
            >
              Explore Classes
            </ButtonLink>
            <Button className="rounded border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-ink">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
