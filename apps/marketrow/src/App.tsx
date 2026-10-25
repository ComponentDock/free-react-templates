import { useEffect, useRef, useState } from 'react'
import { PageFooter } from './components/PageFooter'
import { ProductGrid } from './components/ProductGrid'
import { ShopHeader } from './components/ShopHeader'

/** The reference clears the live region, then re-sets it on a 50ms timer so a
 * repeated message still announces. */
const ANNOUNCE_DELAY = 50
/** The counter disc holds its 125% bump for a quarter second. */
const BUMP_DURATION = 250

/**
 * Marketrow — one band: eyebrow + headline with a bag counter, a live status
 * line and four product cards. The only state is the set of products currently
 * in the bag; the counter reads that set, never a click tally.
 */
export function App() {
  const [added, setAdded] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [bumped, setBumped] = useState(false)

  const statusTimer = useRef<number | undefined>(undefined)
  const bumpTimer = useRef<number | undefined>(undefined)

  useEffect(
    () => () => {
      window.clearTimeout(statusTimer.current)
      window.clearTimeout(bumpTimer.current)
    },
    [],
  )

  const toggle = (product: string) => {
    const wasAdded = added.includes(product)
    const next = wasAdded ? added.filter((name) => name !== product) : [...added, product]
    const count = next.length

    setAdded(next)
    setMessage('')
    window.clearTimeout(statusTimer.current)
    statusTimer.current = window.setTimeout(() => {
      setMessage(
        `${product} ${wasAdded ? 'removed from' : 'added to'} your bag. ${count} ${
          count === 1 ? 'item' : 'items'
        } in bag.`,
      )
    }, ANNOUNCE_DELAY)

    setBumped(true)
    window.clearTimeout(bumpTimer.current)
    bumpTimer.current = window.setTimeout(() => setBumped(false), BUMP_DURATION)
  }

  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans text-ink">
      <main className="mx-auto w-full max-w-[1232px] flex-1 px-4 py-[clamp(32px,6vw,72px)]">
        <ShopHeader count={added.length} bumped={bumped} />
        {/* The line is reserved up front, so the first announcement never
            pushes the grid down. */}
        <p
          role="status"
          data-testid="status"
          className="m-0 -mb-px -mt-[18px] min-h-5 text-[14px] font-medium leading-5 text-ok"
        >
          {message}
        </p>
        <ProductGrid added={added} onToggle={toggle} />
      </main>
      <PageFooter />
    </div>
  )
}
