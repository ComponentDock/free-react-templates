import { FEATURES } from '../data'

export function Features() {
  return (
    <section id="courses" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink md:text-4xl">What We Offer</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Our comprehensive curriculum covers a wide range of subjects designed to develop your
            child&apos;s full potential.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-gray-100 bg-paper p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <feature.icon className="h-8 w-8 text-brand" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="text-sm text-mist">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
