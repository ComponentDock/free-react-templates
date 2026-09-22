import { Dumbbell, HeartPulse, Clock, Users } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  {
    icon: Dumbbell,
    title: 'Quality Equipment',
    description:
      'Premium-grade machines and free weights maintained to the highest standards for safe, effective training every session.',
  },
  {
    icon: HeartPulse,
    title: 'Health Caring',
    description:
      'Comprehensive wellness programs combining fitness coaching with nutritional guidance for holistic health results.',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description:
      'Open 24/7 with flexible scheduling options to fit any lifestyle. Train when it works best for you.',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description:
      'Certified professionals dedicated to creating personalized programs that deliver real, lasting results.',
  },
]

export function Features() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-block border-l-2 border-brand pl-6 font-display text-2xl font-light uppercase tracking-wider text-brand">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl font-bold uppercase text-ink md:text-5xl">
              Push Your Limits Forward
              <br />
              We Offer to You
            </h2>
          </div>
          <ButtonLink
            href="#classes"
            className="shrink-0 border border-brand bg-transparent px-8 py-3 font-display text-sm font-light uppercase tracking-widest text-white hover:bg-brand hover:text-white"
          >
            Explore Classes
          </ButtonLink>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden bg-white px-10 py-16 text-center transition-all"
            >
              <feature.icon className="mx-auto mb-8 h-12 w-12 text-ink" aria-hidden="true" />
              <h3 className="mb-5 font-display text-2xl font-normal uppercase text-ink">
                {feature.title}
              </h3>
              <p className="mb-0 text-base leading-relaxed text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
