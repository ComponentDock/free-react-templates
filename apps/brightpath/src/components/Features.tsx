import { BookOpen, Trophy, Monitor } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'New Classes',
    description:
      'Access freshly updated courses designed by industry professionals. Our curriculum stays current with the latest trends and technologies.',
  },
  {
    icon: Trophy,
    title: 'Top Courses',
    description:
      'Learn from the highest-rated courses on the web. Our ranking system ensures you always find the best content available.',
  },
  {
    icon: Monitor,
    title: 'Full E-Books',
    description:
      'Supplement your learning with comprehensive e-books. Deep-dive into topics with detailed written materials alongside video courses.',
  },
]

const gradients = [
  'from-accent-pink to-accent-orange',
  'from-accent-purple to-accent-magenta',
  'from-brand to-brand-light',
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-end">
          <div className="md:w-1/3 space-y-8">
            {features.map((feature, i) => (
              <div key={feature.title} className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded bg-gradient-to-r ${gradients[i]} flex items-center justify-center`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-heading mb-2">{feature.title}</h4>
                  <p className="text-sm text-body leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
