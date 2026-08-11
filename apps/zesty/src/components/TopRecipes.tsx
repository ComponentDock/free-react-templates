import { Plus } from 'lucide-react'
import type { ReactNode } from 'react'
import { imgUrl, topRecipeLarge, topRecipeSmalls, topRecipesLabel, topRecipesTitle } from '../data'
import { SectionTitle } from './SectionTitle'

/* "Top Recipes this Week" on a #F8F9FB background (reference
   `section.top-recipe.spad`): an overlapping pink title bar with a
   decorative plus box, one large card and a 2×2 grid of small
   thumb/left cards with pink category pills and a hover "+" icon. */
export function TopRecipes() {
  return (
    <section aria-label={topRecipesLabel} className="relative bg-section pt-[100px] pb-[60px]">
      <SectionTitle title={topRecipesTitle} />
      <div className="mx-auto grid max-w-[1170px] gap-[30px] px-4 lg:grid-cols-2">
        <div>
          <div className="group relative">
            <img
              src={imgUrl(topRecipeLarge.seed, 570, 514)}
              alt=""
              className="h-[514px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </div>
          <div className="mt-[23px]">
            <CategoryPill>{topRecipeLarge.category}</CategoryPill>
            <h4 className="mt-[23px] mb-[20px] text-[22px] font-bold leading-[33px] text-ink">
              {topRecipeLarge.title}
            </h4>
            <p className="text-ink/70">{topRecipeLarge.excerpt}</p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {topRecipeSmalls.map((recipe) => (
            <div key={recipe.title} className="grid grid-cols-[120px_1fr] gap-[30px]">
              <div className="group relative overflow-hidden">
                <img
                  src={imgUrl(recipe.seed, 200, 160)}
                  alt=""
                  className="h-[120px] w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <Plus className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <div>
                <CategoryPill>{recipe.category}</CategoryPill>
                <h4 className="mt-[15px] text-[18px] font-bold leading-[30px] text-ink">
                  {recipe.title}
                </h4>
                <p className="mt-2 text-sm text-ink/70">{recipe.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-brand px-[25px] py-1 text-[12px] font-bold tracking-wide text-white uppercase">
      {children}
    </span>
  )
}
