import { Flower2, Sun, Heart } from 'lucide-react'

const features = [
  {
    icon: Flower2,
    title: 'Full Rejuvenation',
    description:
      'Restore your body and mind with holistic yoga practices that promote complete wellness and renewal.',
  },
  {
    icon: Sun,
    title: 'Extension of Spring',
    description:
      'Embrace vitality and energy through seasonal flows that reconnect you with nature and your inner strength.',
  },
  {
    icon: Heart,
    title: 'Against Aging',
    description:
      'Maintain flexibility and youthful energy with specialized sequences designed for longevity and grace.',
  },
] as const

export function About() {
  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Welcome to Aurae</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more
            with our expert-led sessions.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <feature.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{feature.description}</p>
              <a
                href="#classes"
                className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-brand hover:text-brand-dark"
              >
                Explore more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
