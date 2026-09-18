import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="bg-white transition-colors dark:bg-charcoal-800">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: text content */}
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Summer Collection
          </p>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Madewell
          </h1>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">1,499</span>
            <span className="text-lg text-gray-400 line-through">$1,999</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink variant="outline" href="#products">
              Shop Now
            </ButtonLink>
            <ButtonLink variant="primary" href="#collection">
              Shop Now
            </ButtonLink>
          </div>
        </div>

        {/* Right: product image */}
        <div className="relative flex items-center justify-center">
          <img
            src="https://picsum.photos/seed/draped-hero/600/700"
            alt="Featured summer collection product"
            className="h-auto w-full max-w-md rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
