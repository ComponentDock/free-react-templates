import { BarChart3, Users, Shield, Home, HeartPulse, Scale } from 'lucide-react'

const areas = [
  {
    icon: BarChart3,
    title: 'Business Law',
    description: 'Corporate governance, contracts, mergers, and regulatory compliance.',
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Divorce, custody, adoption, and family dispute resolution.',
  },
  {
    icon: Shield,
    title: 'Criminal Law',
    description: 'Defense representation for criminal charges and investigations.',
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'Property transactions, leases, zoning, and title disputes.',
  },
  {
    icon: HeartPulse,
    title: 'Personal Injury',
    description: 'Accident claims, medical malpractice, and liability cases.',
  },
  {
    icon: Scale,
    title: 'Judicial Law',
    description: 'Civil litigation, arbitration, and dispute resolution services.',
  },
]

export function PracticeAreas() {
  return (
    <section id="practice" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Practice Area
          </span>
          <h2 className="mt-2 text-3xl font-bold text-dark-1">What We Cover</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {areas.map((area) => (
            <div key={area.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                <area.icon className="h-8 w-8 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-dark-1">{area.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
