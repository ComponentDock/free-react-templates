import { Calculator, TrendingUp, DollarSign, Users } from 'lucide-react'

const SERVICES = [
  {
    icon: Calculator,
    title: 'Market Analysis',
    description: 'In-depth market research and analysis to drive strategic decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Accounting Advisor',
    description: 'Expert accounting advice tailored to your business needs.',
  },
  {
    icon: DollarSign,
    title: 'General Consultancy',
    description: 'Comprehensive consulting services for financial growth.',
  },
  {
    icon: Users,
    title: 'Structured Assessment',
    description: 'Systematic evaluation of your financial health and compliance.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-light py-20" aria-label="About">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left image */}
        <div>
          <img
            src="https://picsum.photos/seed/tally-about/600/500"
            alt="About Tally"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Right text + services */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            About Us
          </p>
          <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
            Financial Excellence For Your Business
          </h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            With decades of experience in accounting and business consulting, Tally provides
            comprehensive financial solutions that empower businesses to thrive. Our team of experts
            delivers personalized services tailored to your unique needs.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
