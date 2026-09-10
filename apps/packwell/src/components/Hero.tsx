import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'WE MAKE STRONGEST SERVICE ABOVE THE WORLD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: 'packwell-hero-1',
  },
  {
    heading: 'TRUSTED FREIGHT & LOGISTICS PARTNER',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    image: 'packwell-hero-2',
  },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/${slides[0].image}/1920/1080')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
          {slides[0].heading}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{slides[0].description}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <ButtonLink
            href="#services"
            variant="primary"
            className="rounded-[3px] border-2 border-brand bg-brand px-8 py-3 text-white transition-colors hover:bg-brand-dark hover:border-brand-dark"
          >
            Our Service
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="outline"
            className="rounded-[3px] border-2 border-white bg-transparent px-8 py-3 text-white transition-colors hover:bg-white hover:text-ink"
          >
            Get A Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
