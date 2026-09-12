import { ListingCard } from './ListingCard'

const trending = [
  {
    image: 'https://picsum.photos/seed/catalog-trend-1/460/300',
    category: 'Real Estate',
    title: 'Own New House',
    address: 'Don St, Brooklyn, New York',
    rating: 4,
    reviews: 3,
  },
  {
    image: 'https://picsum.photos/seed/catalog-trend-2/460/300',
    category: 'Furniture',
    title: 'Wooden Chair and Table',
    address: 'Don St, Brooklyn, New York',
    rating: 4,
    reviews: 3,
  },
  {
    image: 'https://picsum.photos/seed/catalog-trend-3/460/300',
    category: 'Electronics',
    title: 'iPhone X Gray',
    address: 'Don St, Brooklyn, New York',
    rating: 4,
    reviews: 3,
  },
  {
    image: 'https://picsum.photos/seed/catalog-trend-4/460/300',
    category: 'Cars and Vehicles',
    title: 'New Black Car',
    address: 'Don St, Brooklyn, New York',
    rating: 4,
    reviews: 3,
  },
]

export function TrendingToday() {
  return (
    <section className="bg-gray-100 py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-lg font-bold text-primary-500">Trending Today</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {trending.map((item) => (
            <ListingCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
