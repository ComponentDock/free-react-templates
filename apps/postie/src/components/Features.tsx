import { Cloud, Gamepad2, Lock, MessagesSquare, Video } from 'lucide-react'

const features = [
  {
    title: 'Cloud Based',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Cloud,
  },
  {
    title: 'Voice & Video',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Video,
  },
  {
    title: 'Always Secure',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Lock,
  },
  {
    title: 'Play Games',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: Gamepad2,
  },
  {
    title: 'Group Chat',
    blurb: 'Etiam nec odio vestibulum est mattis efficitur ut magna.',
    icon: MessagesSquare,
  },
] as const

export function Features() {
  return (
    <section id="features" aria-label="Features" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-gray-100">
            Loaded With Features You Would Surely Love.
          </h2>
          <p className="mt-4 text-smoke dark:text-gray-400">
            Everything you need to manage your mail, your way.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-primary-100 bg-gray-50 p-7 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-400 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                {feature.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
