import { Plus } from 'lucide-react'
import { topRecipeLarge, topRecipeSmalls, topRecipesTitle } from '../data'

/* "Top Recipes this Week" (reference `section.top-recipe`, bg #F8F9FB,
   100px padding): pink section-title box (white bold right-aligned heading)
   absolutely positioned overlapping the section's top edge, one large card
   on the left (photo ≈514px + pink category tag + title + excerpt) and a
   list of four small thumbnail cards on the right. */
export function TopRecipes() {
  return (
    <section className="relative bg-section pt-[100px] pb-[60px]">
      <div
        data-section-title-box
        className="absolute top-[-57px] left-0 w-[470px] bg-brand py-[18px] pr-10 text-right"
      >
        <h5 className="font-bold text-white">{topRecipesTitle}</h5>
      </div>

      <div className="relative mx-auto max-w-[1170px] px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <article>
            <div className="group relative overflow-hidden">
              <img
                data-large-image
                src={topRecipeLarge.image}
                alt=""
                className="h-[514px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <span
                data-hover-overlay
                className="absolute inset-0 flex items-center justify-center bg-brand/60 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              >
                <Plus className="h-14 w-14" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-[23px]">
              <span
                data-cat-tag
                className="inline-block bg-brand px-[25px] py-1 text-[12px] font-bold tracking-wide text-white uppercase"
              >
                {topRecipeLarge.category}
              </span>
              <h4 className="mt-[23px] mb-5 text-[22px] leading-[30px] font-bold text-ink">
                {topRecipeLarge.title}
              </h4>
              <p className="text-ink/70">{topRecipeLarge.excerpt}</p>
            </div>
          </article>

          <div className="space-y-10">
            {topRecipeSmalls.map((recipe) => (
              <article key={recipe.title + recipe.category} className="flex gap-6">
                <div className="group relative w-2/5 shrink-0 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt=""
                    className="h-[145px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    data-hover-overlay
                    className="absolute inset-0 flex items-center justify-center bg-brand/60 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <Plus className="h-8 w-8" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex-1">
                  <span
                    data-cat-tag
                    className="inline-block bg-brand px-[25px] py-1 text-[12px] font-bold tracking-wide text-white uppercase"
                  >
                    {recipe.category}
                  </span>
                  <h4 className="mt-[23px] mb-5 text-[22px] leading-[30px] font-bold text-ink">
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
