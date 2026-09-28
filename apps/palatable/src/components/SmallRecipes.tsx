import { Star } from 'lucide-react'

const smallRecipes = [
  {
    title: 'Homemade Italian Pasta',
    image: 'https://picsum.photos/seed/palatable-sr1/120/120',
    date: 'January 04, 2018',
    comments: 2,
  },
  {
    title: 'Baked Bread',
    image: 'https://picsum.photos/seed/palatable-sr2/120/120',
    date: 'January 04, 2018',
    comments: 2,
  },
  {
    title: 'Scallops on Salt',
    image: 'https://picsum.photos/seed/palatable-sr3/120/120',
    date: 'January 04, 2018',
    comments: 2,
  },
  {
    title: 'Fruits on Plate',
    image: 'https://picsum.photos/seed/palatable-sr4/120/120',
    date: 'January 04, 2018',
    comments: 2,
  },
  {
    title: 'Macaroons',
    image: 'https://picsum.photos/seed/palatable-sr5/120/120',
    date: 'January 04, 2018',
    comments: 2,
  },
  {
    title: 'Chocolate Tart',
    image: 'https://picsum.photos/seed/palatable-sr6/120/120',
    date: 'January 04, 2018',
    comments: 2,
  },
  {
    title: 'Berry Desert',
    image: 'https://picsum.photos/seed/palatable-sr7/120/120',
    date: 'January 04, 2018',
    comments: 2,
  },
  {
    title: 'Zucchini Grilled',
    image: 'https://picsum.photos/seed/palatable-sr8/120/120',
    date: 'January 04, 2018',
    comments: 2,
  },
  {
    title: 'Chicken Salad',
    image: 'https://picsum.photos/seed/palatable-sr9/120/120',
    date: 'January 04, 2018',
    comments: 2,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < rating ? 'fill-brand text-brand' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
    </div>
  )
}

export function SmallRecipes() {
  return (
    <section className="py-20" aria-label="Small recipes list">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallRecipes.map((recipe) => (
            <div key={recipe.title} className="flex gap-4 group">
              <div className="shrink-0 w-24 h-24 overflow-hidden rounded">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs text-body">{recipe.date}</span>
                <a
                  href="#"
                  className="text-sm font-semibold text-ink hover:text-brand transition-colors mt-1"
                >
                  {recipe.title}
                </a>
                <div className="mt-1">
                  <StarRating rating={4} />
                </div>
                <p className="text-xs text-body mt-1">{recipe.comments} Comments</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
