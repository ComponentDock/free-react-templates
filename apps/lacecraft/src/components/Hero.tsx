import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '300+', label: 'Styles' },
  { value: 'Free', label: 'Shipping over $75' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Step Into Your Style
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-300">
            Discover premium footwear that combines cutting-edge design with unmatched comfort. From
            the track to the street, Lacecraft has you covered.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className={cn(
                'inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3',
                'text-sm font-semibold text-white shadow-lg transition hover:bg-primary-600',
              )}
            >
              Shop Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#categories"
              className="text-sm font-medium text-gray-300 underline underline-offset-4 hover:text-white"
            >
              Browse Categories
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-primary-400">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl"
      />
    </section>
  )
}
