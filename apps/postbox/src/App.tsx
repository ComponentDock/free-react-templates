import { CARDS } from './data'
import { PageFooter } from './components/PageFooter'
import { SignupCard } from './components/SignupCard'

/**
 * Postbox — a single-screen signup pair on a periwinkle ground. One 1,160 px row
 * holds a navy newsletter card (art left, form right) and a white product-updates
 * card, stretched to a shared 410 px height. There is no nav, no hero and no
 * second row: the pair is the page, and the only addition is the attribution
 * line under it.
 */
export function App() {
  return (
    <main className="flex min-h-0 flex-col bg-ground px-4 py-[clamp(36px,7vw,96px)]">
      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-stretch gap-[22px] max-[900px]:grid-cols-1">
        <SignupCard variant="primary" {...CARDS.primary} />
        <SignupCard variant="compact" {...CARDS.compact} />
      </div>
      <PageFooter />
    </main>
  )
}
