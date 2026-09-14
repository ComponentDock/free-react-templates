import { ButtonLink } from '@free-react-templates/ui'
import { UtensilsCrossed, Leaf, Headphones } from 'lucide-react'

const features = [
  { icon: UtensilsCrossed, label: 'Fast Service' },
  { icon: Leaf, label: 'Fresh Food' },
  { icon: Headphones, label: '24/7 Support' },
]

const heroImages = [
  'https://picsum.photos/seed/crave-hero1/600/400',
  'https://picsum.photos/seed/crave-hero2/600/400',
]

export function HeroBanner() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center bg-white pt-24 md:flex-row md:pt-0"
    >
      {/* Left content */}
      <div className="flex w-full flex-col items-center px-6 py-12 md:w-1/2 md:items-start md:pl-[8%] md:pt-0 lg:pl-[18%]">
        <h1 className="mb-6 text-center font-heading text-5xl font-bold leading-tight text-heading sm:text-6xl md:text-left md:text-7xl">
          Foods the <br className="hidden sm:block" /> most precious things
        </h1>
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <ButtonLink
            href="#contact"
            size="md"
            className="rounded-full bg-primary-600 text-white hover:bg-primary-700 shadow-lg"
          >
            Book Now
          </ButtonLink>
          <a
            href="#"
            className="flex items-center gap-2 font-sans text-sm font-semibold text-heading transition-colors hover:text-brand"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
              ▶
            </span>
            Watch Video
          </a>
        </div>
        <ul className="hidden gap-8 md:flex">
          {features.map((f) => (
            <li key={f.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                <f.icon className="h-6 w-6 text-brand" />
              </div>
              <span className="font-heading text-sm font-semibold text-heading">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right carousel */}
      <div className="w-full px-6 py-8 md:w-1/2 md:px-0">
        <div className="overflow-hidden rounded-lg">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto">
            {heroImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Restaurant dish ${i + 1}`}
                className="h-64 w-full flex-shrink-0 snap-center rounded-lg object-cover sm:h-80 md:h-[450px]"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
