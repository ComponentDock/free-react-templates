import { Video, Camera, BookOpen, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'Video Footages',
    description:
      'Suspendisse dictum enim sit amet libero feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.',
  },
  {
    icon: Camera,
    title: 'Photo Shootings',
    description:
      'Congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna.',
  },
  {
    icon: BookOpen,
    title: 'Photo Albums',
    description:
      'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at finibus.',
  },
  {
    icon: Lightbulb,
    title: 'Original Ideas',
    description:
      'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-ink-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-xl">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
            Amazing Studio
          </span>
          <h2 className="mb-4 text-3xl font-bold text-ink-700 md:text-4xl">See What We Offer</h2>
          <p className="leading-relaxed text-ink-400">
            Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat.
            Praesent malesuada congue magna at finibus.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div key={svc.title} className="flex gap-5">
                <Icon className="mt-1 shrink-0 text-accent" size={28} />
                <div>
                  <h4 className="mb-2 text-lg font-bold capitalize text-ink-700">{svc.title}</h4>
                  <p className="text-sm leading-relaxed text-ink-400">{svc.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
