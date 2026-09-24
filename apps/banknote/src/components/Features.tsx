import { Wallet, ShoppingCart, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Money Savings',
    desc: 'Secure and flexible savings accounts to help you grow your wealth over time.',
  },
  {
    icon: ShoppingCart,
    title: 'Online Shoppings',
    desc: 'Convenient online payment solutions for all your shopping needs.',
  },
  {
    icon: CreditCard,
    title: 'Credit / Debit Cards',
    desc: 'Wide range of cards with rewards, cashback, and competitive interest rates.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand/10">
                <f.icon className="h-10 w-10 text-brand" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
