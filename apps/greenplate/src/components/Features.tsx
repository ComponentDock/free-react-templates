import { Truck, Leaf, Award, Headphones } from 'lucide-react'

const FEATURES = [
  { icon: Truck, title: 'Free Shipping', description: 'Free shipping on orders over $100' },
  { icon: Leaf, title: 'Always Fresh', description: 'Fresh products daily from local farms' },
  { icon: Award, title: 'Superior Quality', description: 'Certified organic produce guaranteed' },
  { icon: Headphones, title: 'Support 24/7', description: 'Customer support around the clock' },
]

export function Features() {
  return (
    <section className="py-16 bg-paper" data-testid="features">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">{feature.title}</h3>
                <p className="text-mist text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
