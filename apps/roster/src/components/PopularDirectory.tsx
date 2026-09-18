import { Heart, UtensilsCrossed } from 'lucide-react'

const listings = [
  {
    title: 'Urban Bites',
    desc: 'Best street food in the city center with local flavors.',
    price: '$$$',
    status: 'Open',
    category: 'Food & Restaurant',
    seed: 'roster-dir1',
  },
  {
    title: 'The Garden Cafe',
    desc: 'Organic coffee and fresh pastries in a cozy atmosphere.',
    price: '$$',
    status: 'Open',
    category: 'Cafe & Bakery',
    seed: 'roster-dir2',
  },
  {
    title: 'Skyline Bar',
    desc: 'Rooftop cocktails with panoramic city views.',
    price: '$$$$',
    status: 'Closed',
    category: 'Bar & Lounge',
    seed: 'roster-dir3',
  },
  {
    title: 'Fresh Market',
    desc: 'Farm-to-table produce and artisan goods daily.',
    price: '$',
    status: 'Open',
    category: 'Grocery & Market',
    seed: 'roster-dir4',
  },
  {
    title: 'Noodle House',
    desc: 'Authentic Asian noodles made with traditional recipes.',
    price: '$$',
    status: 'Open',
    category: 'Food & Restaurant',
    seed: 'roster-dir5',
  },
]

interface DirectoryCardProps {
  listing: (typeof listings)[number]
}

function DirectoryCard({ listing }: DirectoryCardProps) {
  return (
    <div className="min-w-[280px] flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-800">
      <div className="relative">
        <img
          src={`https://picsum.photos/seed/${listing.seed}/400/250`}
          alt={listing.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute inset-0 rounded-t-xl bg-black/50" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded bg-brand/90 px-2 py-1 text-xs font-bold text-white">
            {listing.price}
          </span>
          <span className="rounded bg-white/90 px-2 py-1 text-xs font-medium text-gray-700">
            {listing.status}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-text-dark">
          <a href="#" className="hover:text-brand">
            {listing.title}
          </a>
        </h3>
        <p className="mb-3 text-sm text-text-body">{listing.desc}</p>
        <div className="flex items-center justify-between border-t border-border-light pt-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <UtensilsCrossed className="h-4 w-4" />
            <span>{listing.category}</span>
          </div>
          <button
            aria-label={`Favorite ${listing.title}`}
            className="text-gray-400 transition-colors hover:text-red-500"
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function PopularDirectory() {
  return (
    <section className="border-b border-border-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light text-heading">Popular Directory</h2>
          <p className="text-text-body">
            Let&apos;s uncover the best places to eat, drink, and shop nearest to you.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {listings.map((listing) => (
            <DirectoryCard key={listing.title} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  )
}
