import { Check } from 'lucide-react'

const features = [
  {
    title: 'Expert Team',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Quality Work',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
  },
  {
    title: '24/7 Support',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Affordable Price',
    blurb:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.',
  },
] as const

export function Features() {
  return (
    <section id="elements" aria-label="Features" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            Why Choose Us
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-400 dark:bg-primary-900/40">
                <Check className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke dark:text-gray-400">
                  {feature.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
