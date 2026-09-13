import { Truck, Pill, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description:
      'Free shipping on all orders over $50. Fast and reliable delivery to your doorstep.',
  },
  {
    icon: Pill,
    title: 'New Medicine Everyday',
    description: 'Fresh stock daily with the latest supplements and wellness products.',
  },
  {
    icon: ShieldCheck,
    title: 'Medicines Guaranteed',
    description: 'All products are quality-tested and backed by our satisfaction guarantee.',
  },
]

export function FeatureBanners() {
  return (
    <section className="py-16 md:py-20" data-testid="feature-banners">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={32} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-mist">{feature.description}</p>
                <a
                  href="#products"
                  className="text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Learn more
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
