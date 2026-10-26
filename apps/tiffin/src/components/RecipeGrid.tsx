import type { Recipe } from '../data/recipes'
import { RecipeCard } from './RecipeCard'

interface RecipeGridProps {
  recipes: readonly Recipe[]
}

/**
 * Three cards in a row, one when the column floor stops fitting two. The floor
 * is wrapped in `min(100%, 280px)` so the track can shrink below 280 instead of
 * forcing the document wider than the viewport.
 *
 * The row gap is 96 px for the same reason the head's bottom margin is: 76 px
 * of plate hangs above every card, plus 20 px of visible air.
 */
export function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-[26px] gap-y-24">
      {recipes.map((recipe, index) => (
        <RecipeCard key={recipe.id} recipe={recipe} eager={index < 2} />
      ))}
    </div>
  )
}
