import { ButtonLink } from '@free-react-templates/ui'

const auctions = [
  { id: 1, name: 'Pinky Shoes', category: 'Shoes', bids: 4, price: 95, seed: 'bidcraft-shoe1' },
  {
    id: 2,
    name: 'Eye Glass Protector',
    category: 'Eye Glasses',
    bids: 10,
    price: 30,
    seed: 'bidcraft-glasses',
  },
  {
    id: 3,
    name: 'Black Leather Jacket',
    category: 'Clothing',
    bids: 24,
    price: 199,
    seed: 'bidcraft-jacket',
  },
  {
    id: 4,
    name: 'MacBook 15-Inch',
    category: 'Electronics',
    bids: 224,
    price: 1999,
    seed: 'bidcraft-macbook',
  },
  { id: 5, name: 'iPad', category: 'Electronics', bids: 11, price: 777, seed: 'bidcraft-ipad' },
  {
    id: 6,
    name: 'Shoe Sneakers',
    category: 'Shoes',
    bids: 4,
    price: 78,
    seed: 'bidcraft-sneakers',
  },
  { id: 7, name: 'iMac', category: 'Electronics', bids: 293, price: 1999, seed: 'bidcraft-imac' },
  { id: 8, name: 'iWatch', category: 'Electronics', bids: 123, price: 450, seed: 'bidcraft-watch' },
] as const

function formatPrice(price: number): string {
  return price >= 1000 ? `$${price.toLocaleString()}` : `$${price}`
}

export function AuctionGrid() {
  return (
    <section id="auctions" className="py-16 sm:py-20" aria-label="Current Auctions">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-400">
            Auctions
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">
            Current <span className="text-primary-400">Auctions</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {auctions.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <span className="absolute left-3 top-3 z-10 bg-primary-400 px-3 py-1 text-xs font-bold text-white">
                  {formatPrice(item.price)}
                </span>
                <img
                  src={`https://picsum.photos/seed/${item.seed}/400/300`}
                  alt={item.name}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-bold text-ink">{item.name}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-smoke">
                  <span>{item.category}</span>
                  <span>{item.bids} bids</span>
                </div>
                <ButtonLink
                  href="#cta"
                  className="mt-4 block w-full bg-primary-400 py-2.5 text-center text-sm font-bold text-white transition-colors hover:bg-primary-500"
                >
                  Submit a Bid
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
