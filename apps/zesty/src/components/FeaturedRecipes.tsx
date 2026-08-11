import { featuredLabel, featuredRecipes, featuredTitle, imgUrl } from '../data'
import { SectionTitle } from './SectionTitle'

/* "Featured Recipes" on a #F8F9FB background (reference
   `section.feature-recipe`): the same overlapping pink title bar and two
   horizontal image-left cards with a 30px gap. */
export function FeaturedRecipes() {
  return (
    <section aria-label={featuredLabel} className="relative bg-section py-[55px]">
      <SectionTitle title={featuredTitle} />
      <div className="mx-auto grid max-w-[1170px] gap-[30px] px-4 lg:grid-cols-2">
        {featuredRecipes.map((recipe) => (
          <div key={recipe.title} className="flex flex-col items-start gap-[30px] sm:flex-row">
            <img
              src={imgUrl(recipe.seed, 300, 220)}
              alt=""
              className="w-full object-cover sm:w-[300px]"
            />
            <div className="py-[25px]">
              <h4 className="mb-[10px] text-[20px] font-bold leading-[30px] text-ink">
                {recipe.title}
              </h4>
              <p className="text-ink/70">{recipe.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
