import { Briefcase, BarChart3, Users, Shield, TrendingUp, PiggyBank } from 'lucide-react'

const SERVICES = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    desc: 'Expert guidance for your business challenges',
  },
  { icon: BarChart3, title: 'Market Analysis', desc: 'Data-driven insights for better decisions' },
  { icon: Users, title: 'User Monitoring', desc: 'Track and improve user engagement' },
  { icon: Shield, title: 'Insurance Consulting', desc: 'Protect what matters most' },
  { icon: TrendingUp, title: 'Financial Investment', desc: 'Grow your wealth strategically' },
  { icon: PiggyBank, title: 'Financial Management', desc: 'Optimize your financial resources' },
]

export function Services() {
  return (
    <section id="services" className="border-b bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div key={service.title} className="rounded-lg bg-white p-6 shadow-sm">
              <service.icon className="mb-4 h-10 w-10 text-[#3a4971]" />
              <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
