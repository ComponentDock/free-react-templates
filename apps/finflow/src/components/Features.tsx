import { Wallet, ShoppingCart, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Money Savings',
    description:
      'Smart savings plans designed to help you build wealth over time with competitive interest rates and flexible terms.',
  },
  {
    icon: ShoppingCart,
    title: 'Online Shoppings',
    description:
      'Secure online payment solutions and digital banking services for seamless e-commerce transactions.',
  },
  {
    icon: CreditCard,
    title: 'Credit/Debit Cards',
    description:
      'Wide range of credit and debit card options with rewards programs, fraud protection, and global acceptance.',
  },
] as const

export function Features() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Features
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Why Choose Us
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink dark:text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
