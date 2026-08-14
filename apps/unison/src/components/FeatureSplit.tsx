import { featureBoxes, featureImage } from '../data'

/** Second about split (duplicate `#about-section` in the source): two icon
 *  feature boxes on the left, a rounded photo on the right. */
export function FeatureSplit() {
  return (
    <section className="py-[2.5em] md:py-[5em]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-10">
            {featureBoxes.map((box) => (
              <article key={box.title} className="flex items-start gap-4">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-soft">
                  <box.icon aria-hidden="true" className="h-7 w-7 text-brand" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-heading">{box.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{box.text}</p>
                  <a
                    href="#about-section"
                    className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
          <img
            src={featureImage}
            alt="Unison product team collaborating"
            className="w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
