import { useEffect, useRef, useState } from 'react'
import { DEFAULT_COLOUR, TITLE_ID, type Colour } from '../data/site'
import { SWAP_DELAY, prefersReducedMotion } from '../lib/motion'
import { ProductInfo } from './ProductInfo'
import { ProductMedia } from './ProductMedia'

interface ProductHeroProps {
  readonly onAddToCart: () => void
}

/**
 * One section, one screen, two columns. All of the page's product state lives
 * here: the selected finish (which drives the photograph, its alt, the caption,
 * the legend, the stock line and its low-stock colour) and the 180 ms the photo
 * spends faded out between two finishes.
 *
 * Under `prefers-reduced-motion: reduce` the finish changes synchronously — the
 * fade is the only thing the delay exists for.
 */
export function ProductHero({ onAddToCart }: ProductHeroProps) {
  const [colour, setColour] = useState<Colour>(DEFAULT_COLOUR)
  const [swapping, setSwapping] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (timer.current !== null) window.clearTimeout(timer.current)
    },
    [],
  )

  const chooseColour = (next: Colour) => {
    if (prefersReducedMotion()) {
      setColour(next)
      return
    }
    if (timer.current !== null) window.clearTimeout(timer.current)
    setSwapping(true)
    timer.current = window.setTimeout(() => {
      setColour(next)
      setSwapping(false)
      timer.current = null
    }, SWAP_DELAY)
  }

  return (
    <section className="ot-hero" aria-labelledby={TITLE_ID}>
      <ProductMedia colour={colour} swapping={swapping} />
      <ProductInfo colour={colour} onChoose={chooseColour} onAdd={onAddToCart} />
    </section>
  )
}
