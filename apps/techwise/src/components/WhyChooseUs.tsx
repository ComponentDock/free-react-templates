import { Lightbulb, Target } from 'lucide-react'

const features = [
  {
    icon: Lightbulb,
    title: 'Creative Ideas',
    description:
      'We bring fresh, innovative concepts to every project. Our creative team pushes boundaries to deliver unique solutions that stand out in the market.',
  },
  {
    icon: Target,
    title: 'Better Strategy',
    description:
      'Our data-driven approach ensures every decision is backed by insights. We develop comprehensive strategies that align with your business objectives.',
  },
] as const

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Why Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-dark-bg sm:text-4xl">
            Why Choose Us for Your Next Project?
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded bg-light-bg p-8 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded bg-brand/10 text-brand">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-dark-bg">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
