import { Award, Smartphone, Monitor } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Award achievements',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Smartphone,
    title: 'Read On Any Devices',
    description: 'Separate they live in Bookmarksgrove right at the coast of the Semantics.',
  },
  {
    icon: Monitor,
    title: 'Very High Resolution',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">
            About The Book
          </p>
          <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            About The Book
          </h2>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/pageturn-about/600/400"
              alt="Book about"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand/20" />
          </div>
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-ink dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-muted dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
