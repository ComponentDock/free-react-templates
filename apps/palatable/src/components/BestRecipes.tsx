import { Star } from 'lucide-react'

const recipes = [
  {
    title: 'Sushi Easy Recipe',
    image: 'https://picsum.photos/seed/palatable-r1/400/300',
    rating: 4,
  },
  { title: 'Homemade Burger', image: 'https://picsum.photos/seed/palatable-r2/400/300', rating: 4 },
  { title: 'Vegan Smoothie', image: 'https://picsum.photos/seed/palatable-r3/400/300', rating: 4 },
  { title: 'Calabasa Soup', image: 'https://picsum.photos/seed/palatable-r4/400/300', rating: 4 },
  {
    title: 'Homemade Breakfast',
    image: 'https://picsum.photos/seed/palatable-r5/400/300',
    rating: 4,
  },
  {
    title: 'Healthy Fruit Desert',
    image: 'https://picsum.photos/seed/palatable-r6/400/300',
    rating: 4,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-brand text-brand' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
    </div>
  )
}

export function BestRecipes() {
  return (
    <section className="py-20 bg-white" aria-label="Best recipes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">The Best Recipes</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.title} className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="text-lg font-semibold text-ink hover:text-brand transition-colors"
                >
                  {recipe.title}
                </a>
                <div className="flex justify-center mt-2">
                  <StarRating rating={recipe.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
