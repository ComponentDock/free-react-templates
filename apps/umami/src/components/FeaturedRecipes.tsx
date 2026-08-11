import { Plus } from 'lucide-react'
import { featuredLarge, featuredSmalls, featuredRecipesTitle } from '../data'

/* "Featured Recipes" (reference `section.feature-recipe`, bg #F8F9FB):
   pink section-title box overlapping the top edge, a large featured card
   (photo + title + excerpt) and additional smaller cards with distinct
   titles. */
export function FeaturedRecipes() {
  return (
    <section className="relative bg-section py-[55px]">
      <div
        data-section-title-box
        className="absolute top-[-57px] left-0 w-[470px] bg-brand py-[18px] pr-10 text-right"
      >
        <h5 className="font-bold text-white">{featuredRecipesTitle}</h5>
      </div>

      <div className="relative mx-auto max-w-[1170px] px-4">
        <div className="grid gap-[30px] lg:grid-cols-2">
          <article className="flex gap-[30px]">
            <div className="group relative w-1/2 shrink-0 overflow-hidden">
              <img
                src={featuredLarge.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span
                data-hover-overlay
                className="absolute inset-0 flex items-center justify-center bg-brand/60 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              >
                <Plus className="h-10 w-10" aria-hidden="true" />
              </span>
            </div>
            <div className="pt-[32px]">
              <h4 className="mb-[10px] text-[22px] leading-[30px] font-bold text-ink">
                {featuredLarge.title}
              </h4>
              <p className="text-ink/70">{featuredLarge.excerpt}</p>
            </div>
          </article>

          <div className="space-y-[30px]">
            {featuredSmalls.map((recipe) => (
              <article key={recipe.title} className="flex gap-[30px]">
                <div className="group relative w-1/2 shrink-0 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    data-hover-overlay
                    className="absolute inset-0 flex items-center justify-center bg-brand/60 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <Plus className="h-8 w-8" aria-hidden="true" />
                  </span>
                </div>
                <div className="pt-[20px]">
                  <h4 className="mb-[10px] text-[20px] leading-[28px] font-bold text-ink">
                    {recipe.title}
                  </h4>
                  <p className="text-ink/70">{recipe.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
