import { Truck, DollarSign, RotateCcw, Clock } from 'lucide-react'

const benefits = [
  { icon: Truck, title: 'Free Shipping', desc: 'Free shipping on all orders over $50' },
  { icon: DollarSign, title: 'Cash on Delivery', desc: 'Pay when you receive your order' },
  { icon: RotateCcw, title: '45 Days Return', desc: 'Easy returns within 45 days' },
  { icon: Clock, title: 'Opening All Week', desc: '8AM - 09PM' },
]

export function Benefits() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coral-500 text-white">
                <b.icon className="h-5 w-5" />
              </div>
              <div>
                <h6 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                  {b.title}
                </h6>
                <p className="text-xs text-gray-500">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
