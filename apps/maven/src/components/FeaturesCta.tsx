import { featuresCta } from '../data'

/** Centered CTA band (reference `.cta_part`): pink uppercase eyebrow and a
 *  bold deep-navy section headline. */
export function FeaturesCta() {
  return (
    <section aria-label="Features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-primary-600">
          {featuresCta.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-[42px] font-bold leading-tight text-navy-deep">
          {featuresCta.title}
        </h2>
      </div>
    </section>
  )
}
