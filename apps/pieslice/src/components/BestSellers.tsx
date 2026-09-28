import { cn } from '@free-react-templates/ui'
import { ArrowRight } from 'lucide-react'

interface SellerItem {
  name: string
  price: string
  badge?: string
  badgeColor?: 'primary' | 'secondary' | 'white'
}

const SELLERS: SellerItem[] = [
  { name: 'Pizza Margherita', price: '$11.90', badge: 'OFFER', badgeColor: 'primary' },
  { name: 'Pepperoni Supreme', price: '$13.50' },
  { name: 'Four Cheese', price: '$12.90' },
  { name: 'BBQ Chicken', price: '$14.20', badge: 'SPECIALITY', badgeColor: 'secondary' },
  { name: 'Veggie Delight', price: '$11.50' },
  { name: 'Meat Lovers', price: '$15.00', badge: 'OFFER', badgeColor: 'primary' },
  { name: 'Hawaiian', price: '$12.00', badge: 'PLUS SIZE', badgeColor: 'white' },
  { name: 'Mushroom Truffle', price: '$16.50' },
]

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className={cn(
        'absolute top-2 left-2 rounded px-3 py-1 text-xs font-bold uppercase',
        color === 'primary' && 'bg-brand text-white',
        color === 'secondary' && 'bg-amber-500 text-white',
        color === 'white' && 'bg-white text-ink',
      )}
    >
      {label}
    </span>
  )
}

export function BestSellers() {
  return (
    <section id="best-sellers" className="relative bg-dark-bg py-20 text-white">
      {/* Top triangle */}
      <div className="absolute top-0 left-0 h-0 w-0 border-l-[100vw] border-l-transparent border-t-[50px] border-t-white" />
      {/* Bottom triangle */}
      <div className="absolute bottom-0 left-0 h-0 w-0 border-r-[100vw] border-r-transparent border-b-[50px] border-b-white" />

      <div className="mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-3 h-8 w-8 rotate-45 border-2 border-brand" />
          <h2 className="text-3xl font-bold">Best Sellers</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SELLERS.map((item) => (
            <div key={item.name + item.price} className="text-center">
              <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full bg-white/10">
                {item.badge && item.badgeColor && (
                  <Badge label={item.badge} color={item.badgeColor} />
                )}
                <img
                  src={`https://picsum.photos/seed/pieslice-${item.name.replace(/\s+/g, '-').toLowerCase()}/200/200`}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold">{item.name}</h3>
              <p className="mb-3 text-xl font-bold text-brand">{item.price}</p>
              <a
                href="#menu"
                className="inline-flex items-center gap-1 rounded border border-brand px-5 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Order Now
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            See Today's Menu
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
