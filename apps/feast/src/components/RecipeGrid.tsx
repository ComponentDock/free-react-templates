import { imgUrl, latestRecipesHeading, recipes } from '../data'
import { StarRating } from './StarRating'

export function RecipeGrid() {
  return (
    <section id="recipes" className="bg-white py-16 dark:bg-gray-950 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-medium text-ink dark:text-white md:text-3xl">
          {latestRecipesHeading}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <article
              key={recipe.name}
              className="overflow-hidden bg-white shadow-[0_17px_29px_rgba(0,0,0,0.15)] dark:bg-gray-900"
            >
              <img
                src={imgUrl(recipe.seed, 400, 300)}
                alt={recipe.name}
                className="h-56 w-full object-cover"
              />
              <div className="relative bg-primary py-[15px] pl-[25px] pr-20">
                <h3 className="text-[15px] font-medium text-white">{recipe.name}</h3>
                <StarRating className="mt-1" />
                {/* signature rotated pink sliver on the bar's right edge */}
                <span
                  aria-hidden="true"
                  className="absolute right-[-16px] top-1/2 h-14 w-14 -translate-y-1/2 rotate-[27deg] bg-primary"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
