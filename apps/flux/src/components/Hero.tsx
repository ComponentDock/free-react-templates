import { Button } from '@free-react-templates/ui'

const heroSlide = {
  heading: 'Digital Agency',
  subheading: 'of the year 2024',
  credit: 'Visual Identity by John Doe',
  client: 'Lorem ipsum',
  image: 'https://picsum.photos/seed/flux-hero1/1920/800',
}

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] overflow-hidden bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroSlide.image})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            <span className="text-brand-orange">{heroSlide.heading}</span>
            <br />
            {heroSlide.subheading}
          </h1>
          <p className="mb-8 text-lg text-gray-200">
            {heroSlide.credit} &mdash; Client:{' '}
            <span className="font-semibold text-white">{heroSlide.client}</span>
          </p>
          <Button className="rounded-none bg-brand-orange px-8 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-brand-blue hover:shadow-lg">
            View Project
          </Button>
        </div>
      </div>
    </section>
  )
}
