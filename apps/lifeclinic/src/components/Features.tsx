import {
  featuresTitle,
  featuresDescription,
  featuresLearnMore,
  featuresImageSeed,
  featuresImageAlt,
} from '../data'

export function Features() {
  return (
    <section className="bg-section-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="items-center gap-12 lg:flex">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <img
              src={`https://picsum.photos/seed/${featuresImageSeed}/600/400`}
              alt={featuresImageAlt}
              loading="lazy"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-heading">{featuresTitle}</h2>
            <p className="mt-5 text-muted">{featuresDescription}</p>
            <a
              href="#services"
              className="mt-6 inline-block text-sm font-bold text-brand transition-colors hover:text-brand-hover"
            >
              {featuresLearnMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
