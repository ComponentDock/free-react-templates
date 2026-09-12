import { Layers, Monitor, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Flexible Learning',
    description:
      'Study at your own pace with lifetime access to all enrolled courses. Learn on any device, anytime.',
  },
  {
    icon: Monitor,
    title: 'Expert Instructors',
    description:
      'Learn from industry professionals with real-world experience at leading tech companies.',
  },
  {
    icon: Lightbulb,
    title: 'Career Support',
    description:
      'Get career guidance, portfolio reviews, and job placement support to land your next role.',
  },
]

export function Features() {
  return (
    <section className="bg-navy-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h2 className="font-heading text-3xl font-bold text-navy-900 md:text-4xl">
              Why <br /> Learnhub?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              We combine expert instruction with hands-on learning to help you achieve real career
              outcomes.
            </p>
            <a
              href="#about"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-coral-500 to-gold-400 px-6 py-2.5 font-heading text-sm font-semibold text-white shadow transition hover:shadow-lg"
            >
              Learn More
            </a>
          </div>

          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-coral-500 to-gold-400 text-white shadow">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy-900">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
