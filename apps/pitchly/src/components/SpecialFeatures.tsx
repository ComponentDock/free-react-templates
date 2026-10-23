import { Infinity as InfinityIcon, Lightbulb, MessageCircle } from 'lucide-react'

const features = [
  { title: 'Creative Design', icon: Lightbulb },
  { title: 'Unlimited Features', icon: InfinityIcon },
  { title: 'Full Free Chat', icon: MessageCircle },
] as const

export function SpecialFeatures() {
  return (
    <section id="features" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white sm:text-4xl">
            Special Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates, temporibus
            at, facere harum fugiat!
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-md bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quas nulla est
                  adipisci.
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
