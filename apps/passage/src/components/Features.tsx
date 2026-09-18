import { Shield, Headphones, Award, Plane, FileCheck, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Trusted & Verified',
    description: 'Licensed immigration consultants with a proven track record of success.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your immigration queries and concerns.',
  },
  {
    icon: Award,
    title: 'High Success Rate',
    description: 'Over 95% of our applications are approved on the first submission.',
  },
  {
    icon: Plane,
    title: 'Worldwide Coverage',
    description: 'We cover immigration to 50+ countries across all continents.',
  },
  {
    icon: FileCheck,
    title: 'Documentation Help',
    description: 'Complete assistance with preparing and organizing your application documents.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team of experienced professionals guides you every step of the way.',
  },
]

export function Features() {
  return (
    <section id="services" className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">Our Features</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-heading">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
