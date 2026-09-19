import { Truck, Clock, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
  { icon: Clock, title: 'Delivery On Time', desc: 'Always reliable delivery' },
  { icon: ShieldCheck, title: 'Secure Payment', desc: '100% secure checkout' },
]

export function FeaturesBar() {
  return (
    <section className="bg-section-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-3">
              <f.icon className="w-10 h-10 text-brand" />
              <h3 className="text-sm font-bold text-text-dark uppercase tracking-wider">
                {f.title}
              </h3>
              <p className="text-xs text-text-secondary">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
