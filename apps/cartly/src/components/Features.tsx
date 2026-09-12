import { DollarSign, Truck, Headphones, Shield } from 'lucide-react'

const features = [
  { icon: DollarSign, title: 'Money Back Guarantee', desc: 'Shall open divide a one' },
  { icon: Truck, title: 'Free Delivery', desc: 'Shall open divide a one' },
  { icon: Headphones, title: 'Always Support', desc: 'Shall open divide a one' },
  { icon: Shield, title: 'Secure Payment', desc: 'Shall open divide a one' },
]

export function Features() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="border border-neutral-100 px-4 py-8 text-center">
              <f.icon className="mx-auto h-6 w-6 text-neutral-600" aria-hidden="true" />
              <h3 className="mt-5 font-heading text-sm font-medium uppercase text-neutral-800">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
