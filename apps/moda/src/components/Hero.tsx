import { ChevronDown, Lock, Truck } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '500+', label: 'Premium Products' },
] as const

const chips = [
  { label: 'Free Shipping', icon: Truck },
  { label: 'Secure Checkout', icon: Lock },
] as const

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <img
        src="https://picsum.photos/seed/moda-hero/1920/1080"
        alt="Fashion collection"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Spring/Summer 2032 Collection
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Elevate Your <span className="text-primary-400">Everyday</span> Style
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Discover curated collections of premium fashion and lifestyle products. Timeless designs
            crafted for the modern individual.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink
              href="#featured"
              className="h-auto rounded-lg bg-primary-600 px-8 py-4 font-semibold text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Shop Collection
            </ButtonLink>
            <ButtonLink
              href="#categories"
              className="h-auto rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/20"
            >
              Browse Categories
            </ButtonLink>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating trust chips */}
      <div className="absolute bottom-24 right-8 hidden flex-col gap-3 lg:flex">
        {chips.map((chip) => (
          <span
            key={chip.label}
            className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <chip.icon className="h-4 w-4 text-primary-300" aria-hidden="true" />
            {chip.label}
          </span>
        ))}
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/70">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  )
}
