import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink py-24 text-white transition-colors dark:bg-ink-dark sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Author: Travor James
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-wide sm:text-5xl">
            New Adventure
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-gray-300">
            Discover a story that takes you beyond the ordinary. Immerse yourself in a world of
            adventure, mystery, and unforgettable characters.
          </p>
          <ButtonLink
            href="#pricing"
            variant="primary"
            className="mt-8 rounded-sm px-8 py-3 text-sm font-bold uppercase tracking-wider"
          >
            Buy Now for $9.99
          </ButtonLink>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/liber-hero/400/500"
            alt="Book cover illustration"
            className="w-64 rounded-lg shadow-2xl sm:w-80"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
