import { ArrowRight, RotateCcw, Star, Truck } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const trust = [
  { icon: Star, text: '4.9 Average Rating' },
  { icon: Truck, text: 'Free Shipping over $75' },
  { icon: RotateCcw, text: '60-Day Easy Returns' },
] as const

export function Hero() {
  return (
    <section id="home" className="bg-gray-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/15 px-4 py-1.5 text-sm font-semibold text-primary-400">
            <Star className="h-4 w-4 fill-current" aria-hidden="true" />
            Up to 40% Off
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Step Into <span className="text-primary-500">Your Best</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-400">
            Premium footwear for every step of your journey. From athletic performance to everyday
            comfort.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="#shop" className="rounded-full px-7 py-3.5 text-base font-semibold">
              Shop Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="#featured"
              variant="outline"
              className="rounded-full border-gray-700 px-7 py-3.5 text-base font-semibold text-white hover:border-gray-500 hover:bg-gray-800 hover:text-white"
            >
              Browse Categories
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-gray-300">
            {trust.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-primary-400" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-600/40 via-primary-500/20 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <img
            src="https://picsum.photos/seed/treadly-hero/800/800"
            alt="Featured orange running sneaker"
            className="relative aspect-square w-full rounded-full object-cover shadow-2xl ring-1 ring-white/10"
            width={800}
            height={800}
          />
        </Reveal>
      </div>
    </section>
  )
}
