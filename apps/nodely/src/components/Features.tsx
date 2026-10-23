import { HeartHandshake, PenTool, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Fully Secured',
    blurb:
      'Your data stays safe behind bank-grade encryption, so you can focus on growing your network.',
  },
  {
    icon: PenTool,
    title: 'Unique Design',
    blurb: 'A modern, distinctive interface crafted to stand out and keep your audience engaged.',
  },
  {
    icon: HeartHandshake,
    title: 'A Volunteer',
    blurb: 'Join a community that gives back — every plan supports causes that matter.',
  },
] as const

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-gray-100 bg-paper p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <feature.icon className="mx-auto h-12 w-12 text-primary-600" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold text-ink dark:text-white">{feature.title}</h3>
            <p className="mt-3 font-accent text-lg leading-relaxed text-body dark:text-gray-400">
              {feature.blurb}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
