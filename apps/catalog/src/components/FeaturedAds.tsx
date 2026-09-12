import { ListingCard } from './ListingCard'

const listings = [
  {
    image: 'https://picsum.photos/seed/catalog-listing-1/460/300',
    category: 'Cars and Vehicles',
    title: 'New Black Car',
    address: 'Don St, Brooklyn, New York',
    rating: 4,
    reviews: 3,
  },
  {
    image: 'https://picsum.photos/seed/catalog-listing-2/460/300',
    category: 'Real Estate',
    title: 'Own New House',
    address: 'Don St, Brooklyn, New York',
    rating: 4,
    reviews: 3,
  },
  {
    image: 'https://picsum.photos/seed/catalog-listing-3/460/300',
    category: 'Furniture',
    title: 'Wooden Chair and Table',
    address: 'Don St, Brooklyn, New York',
    rating: 4,
    reviews: 3,
  },
  {
    image: 'https://picsum.photos/seed/catalog-listing-4/460/300',
    category: 'Electronics',
    title: 'iPhone X Gray',
    address: 'Don St, Brooklyn, New York',
    rating: 4,
    reviews: 3,
  },
]

export function FeaturedAds() {
  return (
    <section className="bg-gray-100 py-12 md:py-20" id="listings">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-lg font-bold text-ink">Featured Ads</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {listings.map((item) => (
            <div key={item.title} className="min-w-[300px] flex-1">
              <ListingCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
