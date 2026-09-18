import { Truck, Tag, Gift } from 'lucide-react'

const banners = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Amet sit amet dolor. Lorem, ipsum dolor sit amet consectetur adipisicing.',
    variant: 'primary' as const,
  },
  {
    icon: Tag,
    title: 'Season Sale 50% Off',
    description: 'Amet sit amet dolor. Lorem, ipsum dolor sit amet consectetur adipisicing.',
    variant: 'white' as const,
  },
  {
    icon: Gift,
    title: 'Buy A Gift Card',
    description: 'Amet sit amet dolor. Lorem, ipsum dolor sit amet consectetur adipisicing.',
    variant: 'warning' as const,
  },
]

const variantClasses = {
  primary: 'bg-brand text-white',
  white: 'bg-white text-ink',
  warning: 'bg-amber-400 text-ink',
}

export function FeatureBanners() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {banners.map((banner) => (
            <div key={banner.title} className={`rounded-lg p-8 ${variantClasses[banner.variant]}`}>
              <banner.icon className="mb-4 h-8 w-8 opacity-80" aria-hidden="true" />
              <h3 className="text-xl font-bold uppercase">{banner.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80">{banner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
