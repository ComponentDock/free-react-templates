import { Award, Clock, Users, Shield } from 'lucide-react'

const FEATURES = [
  {
    icon: Award,
    title: 'Quality Services',
    description: 'We provide world-class medical services with the highest standards of care.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency services with rapid response teams.',
  },
  {
    icon: Users,
    title: 'Expert Doctors',
    description: 'Our team consists of board-certified specialists with decades of experience.',
  },
  {
    icon: Shield,
    title: 'Trusted Care',
    description: 'Trusted by thousands of patients for reliable and compassionate healthcare.',
  },
]

export default function QualityHealth() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-primary text-sm font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mt-2">
            Quality Health Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary text-white mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-3">
                {feature.title}
              </h3>
              <p className="text-brand-body text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
