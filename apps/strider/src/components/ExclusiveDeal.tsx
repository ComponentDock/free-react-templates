import { ShoppingBag } from 'lucide-react'

export function ExclusiveDeal() {
  return (
    <section className="bg-light-bg py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-2 lg:px-8">
        <div className="space-y-4">
          <span className="text-sm font-medium uppercase tracking-wider text-brand">
            Exclusive Offer
          </span>
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Fashion Up To 50% Off
          </h2>
          <p className="text-body">
            Limited time offer on our premium selection. Grab the best deals before they are gone.
          </p>
          <div className="flex gap-4">
            {[
              { value: '02', label: 'Days' },
              { value: '14', label: 'Hours' },
              { value: '36', label: 'Mins' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-white shadow-sm"
              >
                <span className="text-lg font-bold text-heading">{item.value}</span>
                <span className="text-[10px] uppercase text-body">{item.label}</span>
              </div>
            ))}
          </div>
          <a
            href="#shop"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-light to-brand px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all hover:shadow-xl"
          >
            <ShoppingBag size={18} />
            Shop Now
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/strider-deal/500/500"
            alt="Exclusive deal on sneakers"
            className="w-full max-w-md rounded-2xl object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
