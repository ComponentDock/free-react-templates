interface FeatureShowcaseProps {
  subtitle: string
  heading: string
  description: string
  imageUrl: string
  imageAlt: string
  reverse: boolean
}

export function FeatureShowcase({
  subtitle,
  heading,
  description,
  imageUrl,
  imageAlt,
  reverse,
}: FeatureShowcaseProps) {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className={reverse ? 'order-2 lg:order-1' : ''}>
          <img src={imageUrl} alt={imageAlt} className="w-full" loading="lazy" />
        </div>
        <div className={reverse ? 'order-1 lg:order-2' : ''}>
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-brand">
            {subtitle}
          </span>
          <h2 className="mb-4 text-3xl font-bold">{heading}</h2>
          <p className="mb-6 text-mist">{description}</p>
          <a
            href="#"
            className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
