import { Wallet, BarChart3, Send } from 'lucide-react'

const SERVICES = [
  {
    icon: Wallet,
    title: 'Get Paid through Bitcoin',
    description:
      'Receive payments globally with zero intermediaries. Our platform makes it easy to accept Bitcoin for your business.',
  },
  {
    icon: BarChart3,
    title: 'Bitcoin Exchange Analysis',
    description:
      'Track market trends with real-time analytics and historical data. Make informed decisions with our powerful tools.',
  },
  {
    icon: Send,
    title: 'Send & Receive Bitcoin',
    description:
      'Fast, secure transfers to anyone in the world. Low fees, instant confirmations, and complete transparency.',
  },
]

export function Services() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <article key={title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-brand/10">
                <Icon className="h-7 w-7 text-orange-brand" />
              </div>
              <h3 className="mb-3 text-[18px] font-semibold text-dark-bg">
                <a href="#features" className="transition-colors hover:text-orange-brand">
                  {title}
                </a>
              </h3>
              <p className="text-[15px] font-light leading-7 text-text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
