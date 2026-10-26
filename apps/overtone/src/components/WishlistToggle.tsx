import { useState } from 'react'
import { Heart } from 'lucide-react'
import { WISHLIST_LABEL } from '../data/site'

/**
 * The square toggle beside the buy bar. It is the page's only purely local
 * state: `aria-pressed` carries it, and the pressed styling is a colour change
 * *plus* a 2 px ring so the state is never colour-only.
 */
export function WishlistToggle() {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      type="button"
      className="ot-wish"
      aria-pressed={pressed}
      aria-label={WISHLIST_LABEL}
      onClick={() => setPressed((value) => !value)}
    >
      <Heart size={22} aria-hidden="true" className="ot-heart" />
    </button>
  )
}
