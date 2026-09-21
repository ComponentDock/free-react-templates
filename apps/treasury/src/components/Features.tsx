import { PiggyBank, ShoppingCart, CreditCard } from 'lucide-react'

const features = [
  {
    Icon: PiggyBank,
    title: 'Money Savings',
    description:
      'Smart savings plans tailored to your financial goals with competitive interest rates.',
  },
  {
    Icon: ShoppingCart,
    title: 'Online Shopping',
    description: 'Seamless digital payment solutions for all your online transactions.',
  },
  {
    Icon: CreditCard,
    title: 'Credit / Debit Cards',
    description: 'Premium cards with exclusive rewards and global acceptance.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-gray-100 p-8 text-center shadow-sm transition-colors dark:border-gray-800"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
