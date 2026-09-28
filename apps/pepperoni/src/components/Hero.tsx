import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'Italian Cuisine',
    sub: 'Authentic flavors from the heart of Italy',
    bg: 'https://picsum.photos/seed/pepperoni-hero1/1600/900',
  },
  {
    heading: 'Italian Pizza',
    sub: 'Handcrafted with the finest ingredients',
    bg: 'https://picsum.photos/seed/pepperoni-hero2/1600/900',
  },
  {
    heading: 'We cooked your desired Pizza Recipe',
    sub: 'From our oven to your table',
    bg: 'https://picsum.photos/seed/pepperoni-hero3/1600/900',
  },
] as const

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] overflow-hidden bg-surface">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[0].bg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {slides[0].heading}
        </h1>
        <p className="mb-8 max-w-xl text-lg text-gray-300">{slides[0].sub}</p>
        <ButtonLink
          href="#menu"
          className="rounded-lg bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-surface hover:bg-brand-dark"
        >
          Order Now
        </ButtonLink>
      </div>
    </section>
  )
}
