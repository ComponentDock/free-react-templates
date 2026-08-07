import { BrandIcon } from './BrandIcon'

export function Hero() {
  return (
    <section id="home" className="pb-8 pt-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/archon-hero/1200/500"
            alt="Curved white architecture interior"
            className="h-[400px] w-full object-cover"
          />

          <blockquote className="absolute -top-10 left-[8%] max-w-[450px] text-ink dark:text-white">
            <span aria-hidden="true" className="block text-6xl leading-none">
              “
            </span>
            <h1 className="text-2xl font-bold leading-tight">
              Awesome free HTML template for{' '}
              <strong className="font-extrabold text-brand">modern websites</strong>.
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <img
                src="https://picsum.photos/seed/archon-adam/48/48"
                alt="Portrait of Adam Aderson"
                className="h-12 w-12 rounded-full object-cover"
              />
              <cite className="text-sm font-semibold not-italic">Adam Aderson</cite>
            </div>
          </blockquote>

          <div className="absolute -top-10 right-[8%] max-w-[300px] border-2 border-ink bg-white pb-20 pl-8 pr-8 pt-8 text-ink dark:border-white dark:bg-gray-900 dark:text-white">
            <h2 className="text-lg font-bold">Get Quote</h2>
            <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-300">
              We craft spaces that speak — bold, functional, and built to last.
            </p>
            <a
              href="#footer"
              className="absolute bottom-0 right-0 bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand dark:bg-white dark:text-ink dark:hover:bg-brand dark:hover:text-white"
            >
              Get a quote
            </a>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-sm font-medium text-mist dark:text-gray-400">
              Share me please!
            </span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-line text-ink transition-colors hover:bg-brand hover:text-white dark:bg-gray-800 dark:text-white"
            >
              <BrandIcon name="facebook" className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-line text-ink transition-colors hover:bg-brand hover:text-white dark:bg-gray-800 dark:text-white"
            >
              <BrandIcon name="twitter" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
