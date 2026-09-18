import { Heart, UtensilsCrossed } from 'lucide-react'

const newListings = [
  {
    title: 'Sakura Lounge',
    desc: 'Japanese fusion dining with a modern twist and sake bar.',
    price: '$$$',
    status: 'Open',
    category: 'Food & Restaurant',
    seed: 'roster-new1',
  },
  {
    title: 'Artisan Deli',
    desc: 'Handcrafted sandwiches and charcuterie boards to go.',
    price: '$$',
    status: 'Open',
    category: 'Deli & Sandwiches',
    seed: 'roster-new2',
  },
  {
    title: 'Brew & Co',
    desc: 'Craft beer selection with local brews and pub favorites.',
    price: '$$',
    status: 'Closed',
    category: 'Bar & Brewery',
    seed: 'roster-new3',
  },
  {
    title: 'Green Leaf Spa',
    desc: 'Relaxation and wellness treatments using organic products.',
    price: '$$$$',
    status: 'Open',
    category: 'Health & Wellness',
    seed: 'roster-new4',
  },
  {
    title: 'The Book Nook',
    desc: 'Independent bookshop with reading corner and coffee bar.',
    price: '$',
    status: 'Open',
    category: 'Books & Coffee',
    seed: 'roster-new5',
  },
]

interface NewCardProps {
  listing: (typeof newListings)[number]
}

function NewCard({ listing }: NewCardProps) {
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

export function NewDirectory() {
  return (
    <section className="border-b border-border-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light text-heading">New Directory</h2>
          <p className="text-text-body">
            Let&apos;s uncover the best places to eat, drink, and shop nearest to you.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {newListings.map((listing) => (
            <NewCard key={listing.title} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  )
}
