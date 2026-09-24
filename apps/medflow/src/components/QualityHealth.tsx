import { Headphones, Search, UserSearch } from 'lucide-react'

const FEATURES = [
  {
    icon: Headphones,
    title: 'Health Consultation',
    description:
      'Get expert medical consultation from our experienced healthcare professionals for your health concerns.',
  },
  {
    icon: Search,
    title: 'Find Health',
    description:
      'Discover comprehensive health information and resources to help you maintain a healthy lifestyle.',
  },
  {
    icon: UserSearch,
    title: 'Search Doctor',
    description:
      'Find the right doctor for your needs from our team of specialized and board-certified physicians.',
  },
]

export default function QualityHealth() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-heading mb-3">
            Quality Health
          </h2>
          <p className="text-brand-body max-w-lg mx-auto">
            We provide exceptional healthcare services to help you live a healthier, happier life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center px-6">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Icon size={28} className="text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-brand-heading mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-body text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
