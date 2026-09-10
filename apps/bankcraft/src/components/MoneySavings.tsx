import { Landmark, ShoppingBag, CreditCard, Calculator } from 'lucide-react'

const features = [
  {
    icon: Landmark,
    title: 'Money Savings',
    desc: 'Smart savings plans designed to help you reach your financial goals faster.',
  },
  {
    icon: ShoppingBag,
    title: 'Online Shoppings',
    desc: 'Secure online payment processing for all your digital transactions.',
  },
  {
    icon: CreditCard,
    title: 'Credit / Debit Cards',
    desc: 'Wide range of card options with rewards and cashback benefits.',
  },
  {
    icon: Calculator,
    title: 'Amortization Computation',
    desc: 'Accurate loan amortization schedules and financial calculators.',
  },
]

export function MoneySavings() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Money Savings</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Discover our range of financial products designed to maximize your savings and secure
            your future.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-md"
            >
              <f.icon className="mx-auto mb-4 h-12 w-12 text-brand" />
              <h3 className="mb-2 text-lg font-bold text-ink">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
