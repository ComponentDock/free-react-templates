import { BookOpen, Users, Heart } from 'lucide-react'

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Connect With God',
    description:
      'Discover a deeper relationship with God through our Bible studies, prayer groups, and spiritual mentorship programs.',
  },
  {
    icon: Users,
    title: 'Come As You Are',
    description:
      'We welcome everyone, no matter where they are in their faith journey. Our doors and hearts are always open to you.',
  },
  {
    icon: Heart,
    title: 'Fellowship',
    description:
      'Build meaningful relationships with others who share your values and beliefs through our community events and gatherings.',
  },
]

export function Features() {
  return (
    <section className="py-20" aria-label="Features">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 font-heading text-xl font-medium text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
