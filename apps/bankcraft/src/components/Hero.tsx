import { Shield, CreditCard, PiggyBank } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Financing Solutions',
    desc: 'Flexible financing options tailored to your business needs.',
  },
  {
    icon: CreditCard,
    title: 'Credit & Debit Cards',
    desc: 'Secure and convenient card services for everyday use.',
  },
  {
    icon: PiggyBank,
    title: 'Savings Accounts',
    desc: 'Grow your savings with competitive interest rates.',
  },
]

export function Hero() {
  return (
    <section id="home" className="relative bg-ink py-24 text-white">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/bankcraft-hero/1600/800')] bg-cover bg-center opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Banking Solutions</h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300">
          We provide comprehensive financial services to help you manage, grow, and protect your
          wealth with confidence.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15"
            >
              <s.icon className="mb-4 h-12 w-12 text-brand" />
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
