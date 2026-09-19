import { Headphones, RotateCcw, Truck } from 'lucide-react'

const features = [
  {
    icon: Headphones,
    title: 'Online Support 24/7',
    desc: 'Our team is always available to help you with any questions about our spirits collection.',
  },
  {
    icon: RotateCcw,
    title: 'Money Back Guarantee',
    desc: 'Not satisfied? We offer a full refund on any purchase within 30 days of delivery.',
  },
  {
    icon: Truck,
    title: 'Free Shipping & Return',
    desc: 'Enjoy complimentary shipping on orders over $50 with hassle-free returns.',
  },
]

export function Features() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-lg bg-bg-light p-6 dark:bg-gray-800"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <f.icon size={24} />
              </div>
              <div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-heading dark:text-white">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink dark:text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
