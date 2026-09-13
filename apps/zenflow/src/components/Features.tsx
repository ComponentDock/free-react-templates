import { Rocket, Camera, Megaphone } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Web Development',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
  },
  {
    icon: Megaphone,
    title: 'Online Marketing',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-400">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-ink">
                {feature.title}
              </h3>
              <p className="mt-4 text-body leading-relaxed">{feature.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-bold uppercase tracking-wider text-primary-400 transition-colors hover:text-primary-500"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
