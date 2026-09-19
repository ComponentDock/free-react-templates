import { Truck, ShieldCheck, RefreshCw } from 'lucide-react'

const methods = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $50 — fast and reliable delivery worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    description: '100% secure payment with SSL encryption for your safety.',
  },
  {
    icon: RefreshCw,
    title: 'Returns & Exchange',
    description: 'Easy 30-day returns and exchanges on all purchases.',
  },
]

export function ShopMethods() {
  return (
    <section className="bg-paper py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {methods.map((method) => (
            <div key={method.title} className="flex items-start gap-4">
              <method.icon className="h-10 w-10 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="font-[var(--font-heading)] text-lg font-semibold text-ink dark:text-white">
                  {method.title}
                </h3>
                <p className="mt-1 text-sm text-mist dark:text-gray-400">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
