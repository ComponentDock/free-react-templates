import { ArrowRight, BarChart3, LineChart, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Strategic Planning',
    description:
      'We help define your long-term vision and create actionable roadmaps to achieve your business goals.',
  },
  {
    icon: LineChart,
    title: 'Trades & Stocks',
    description:
      'Expert financial advisory for investment strategies, portfolio management, and market analysis.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit & Assurance',
    description:
      'Comprehensive audit services to ensure compliance, transparency, and financial integrity.',
  },
]

export function OurServices() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-navy-dark">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-navy-dark">{s.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">{s.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-[5px] bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            More Services
          </a>
        </div>
      </div>
    </section>
  )
}
