import {
  TrendingUp,
  BarChart3,
  Banknote,
  Receipt,
  ShieldCheck,
  PiggyBank,
  AlertTriangle,
  Cpu,
} from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface ServicesGridProps {
  className?: string
}

const services = [
  {
    icon: TrendingUp,
    title: 'Financial Planning',
    desc: 'Strategic financial roadmaps tailored to your goals and risk tolerance.',
  },
  {
    icon: BarChart3,
    title: 'Investments Management',
    desc: 'Expert portfolio management to maximize returns and minimize risk.',
  },
  {
    icon: Banknote,
    title: 'Business Loan',
    desc: 'Flexible financing solutions for growing businesses at competitive rates.',
  },
  {
    icon: Receipt,
    title: 'Taxes Consulting',
    desc: 'Comprehensive tax planning and compliance to optimize your tax position.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Consulting',
    desc: 'Personalized insurance coverage analysis and recommendations.',
  },
  {
    icon: PiggyBank,
    title: 'Retirement Planning',
    desc: 'Secure your future with a retirement plan designed around your lifestyle.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Management',
    desc: 'Identify, assess, and mitigate financial risks across your portfolio.',
  },
  {
    icon: Cpu,
    title: 'Technology Consulting',
    desc: 'Leverage fintech solutions to streamline your financial operations.',
  },
]

export function ServicesGrid({ className }: ServicesGridProps) {
  return (
    <section
      id="services"
      className={cn('bg-cloud py-16 sm:py-20', className)}
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase text-primary-400">
            Services
          </span>
          <h2 id="services-heading" className="text-2xl font-bold text-ink sm:text-3xl">
            Our Exclusive Services We Offer For You
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center gap-3 rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-400">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
              <p className="text-xs leading-relaxed text-smoke">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
