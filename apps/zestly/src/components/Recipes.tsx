const recipes = [
  {
    title: 'Egg Manchurian',
    category: 'Appetizer',
    time: '30 Mins',
    image: 'https://picsum.photos/seed/zestly-recipe1/400/300',
  },
  {
    title: 'Pure Vegetable Bowl',
    category: 'Appetizer',
    time: '30 Mins',
    image: 'https://picsum.photos/seed/zestly-recipe2/400/300',
  },
  {
    title: 'Egg Masala Ramen',
    category: 'Appetizer',
    time: '30 Mins',
    image: 'https://picsum.photos/seed/zestly-recipe3/400/300',
  },
]

export function Recipes() {
  return (
    <section id="recipes" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {recipes.map((recipe) => (
            <article key={recipe.title} className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="font-body text-xl font-bold text-body">{recipe.title}</h3>
              <span className="font-body text-sm text-brand-pink">{recipe.category}</span>
              <p className="mt-1 font-body text-sm text-secondary">Time Needs: {recipe.time}</p>
              <a
                href="#"
                className="mt-4 inline-block border border-body px-6 py-2 font-body text-sm font-medium text-body transition-colors hover:bg-body hover:text-white"
              >
                View Full Recipe
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
