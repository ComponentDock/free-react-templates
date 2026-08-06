import { Zap, Users, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    blurb:
      'Loads in an instant on any device, so your visitors never wait for your story to unfold.',
  },
  {
    icon: Users,
    title: 'Team Ready',
    blurb:
      'Built for collaboration — share drafts, gather feedback, and publish together in one place.',
  },
  {
    icon: TrendingUp,
    title: 'Grows With You',
    blurb: 'Start with a single page and scale to a full site as your product and audience grow.',
  },
] as const

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="bg-paper py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Everything you need to launch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Thoughtful features out of the box — so you can focus on your message, not the plumbing.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <feature.icon className="mx-auto h-12 w-12 text-primary-500" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-semibold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
