import { Shield, Scale, Gavel, Briefcase, Users, Landmark } from 'lucide-react'

const EXPERTISE = [
  {
    icon: Shield,
    title: 'Insurance Matters',
    description: 'Expert guidance through insurance claims and disputes to protect your interests.',
  },
  {
    icon: Scale,
    title: 'Legal Advisory',
    description:
      'Strategic legal counsel for complex business decisions and regulatory compliance.',
  },
  {
    icon: Gavel,
    title: 'Litigation Support',
    description: 'Full-service litigation support from pre-trial preparation through appeal.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Law',
    description:
      'Comprehensive corporate legal services including formation, governance, and transactions.',
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Compassionate representation for divorce, custody, and family legal matters.',
  },
  {
    icon: Landmark,
    title: 'Real Estate Law',
    description: 'Transaction and dispute resolution for residential and commercial real estate.',
  },
]

export function AreasOfExpertise() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase">Areas of Expertise</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded bg-brand text-white">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
