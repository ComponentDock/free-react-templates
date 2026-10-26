import { RECIPES } from './data/recipes'
import { PageFooter } from './components/PageFooter'
import { RecipeGrid } from './components/RecipeGrid'
import { RecipeHead } from './components/RecipeHead'

/**
 * Tiffin — one rust eyebrow and one serif headline over three dinner cards on
 * warm paper. There is no behaviour to wire: no state, no timer, no form. The
 * card hover rotation and the focus ring are CSS, which is exactly what the
 * design ships.
 */
export function App() {
  return (
    <main className="mx-auto max-w-[1172px] px-4 py-[clamp(32px,6vw,72px)] text-ink">
      <RecipeHead />
      <RecipeGrid recipes={RECIPES} />
      <PageFooter />
    </main>
  )
}
