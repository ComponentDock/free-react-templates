import { BedDouble, Bath, Square } from 'lucide-react'

const LISTINGS = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/feat1/600/400',
    badge: 'For Sale',
    address: '24 Fifth Avenue, New York',
    beds: 4,
    baths: 2,
    sqft: '2,500',
    agent: 'John Smith',
    price: '$450,000',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/feat2/600/400',
    badge: 'For Rent',
    address: '101 St. John Street, New York',
    beds: 3,
    baths: 2,
    sqft: '1,800',
    agent: 'Sarah Johnson',
    price: '$2,500/mo',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/feat3/600/400',
    badge: 'For Sale',
    address: '856 Main Street, Chicago',
    beds: 5,
    baths: 3,
    sqft: '3,200',
    agent: 'Mike Williams',
    price: '$680,000',
  },
]

export function FeaturedListings() {
  return (
    <section className="py-16 bg-white" aria-label="Featured listings">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-dark">Featured Listings</h2>
          <p className="mt-2 text-text-gray">Explore our top featured properties</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LISTINGS.map((listing) => (
            <div key={listing.id} className="bg-white shadow-md overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold uppercase px-3 py-1">
                    {listing.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-text-gray">{listing.address}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-text-gray">
                  <span className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4" /> {listing.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" /> {listing.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Square className="h-4 w-4" /> {listing.sqft} sqft
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <span className="text-sm text-text-gray">Agent: {listing.agent}</span>
                  <span className="text-xl font-bold text-primary">{listing.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
