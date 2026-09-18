import { Briefcase, Users, Building2, TrendingUp } from 'lucide-react'

const SERVICES = [
  {
    icon: Briefcase,
    title: 'Easy To Manage Jobs',
    description:
      'Post and manage job listings with our intuitive dashboard and reach thousands of candidates.',
  },
  {
    icon: Users,
    title: 'Search Expert Candidates',
    description: 'Find the best candidates with advanced search filters and AI-powered matching.',
  },
  {
    icon: Building2,
    title: 'Top Companies Hiring',
    description: 'Connect with leading companies actively looking for talent like you.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth Tools',
    description: 'Access resources and insights to accelerate your career development.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-dark-overlay">Our Services</h2>
          <p className="text-gray-500">What we offer to help you find the perfect job</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
                <service.icon size={28} className="text-brand-blue" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-dark-overlay">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
