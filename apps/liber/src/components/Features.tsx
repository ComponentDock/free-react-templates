import { BookOpen, PenTool, Users, Award } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Expert Writing',
    description: 'Crafted narratives backed by decades of research and real-world experience.',
  },
  {
    icon: PenTool,
    title: 'Unique Voice',
    description:
      'A distinctive storytelling style that keeps readers engaged from start to finish.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join thousands of passionate readers who share a love for great literature.',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized across multiple literary awards and international book festivals.',
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-ink py-20 text-white transition-colors dark:bg-ink-dark"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-wide sm:text-4xl">
            Some Features that Made us Unique
          </h2>
          <p className="mt-4 text-gray-400">What sets our work apart from the rest.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                <feature.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
