import { useEffect, useRef, useState } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SaveButtonProps {
  address: string
  saved: boolean
  onToggle: () => void
}

/**
 * The card's only control: a 44 px white circle holding a 22 px heart. Both
 * halves of the state are exposed — `aria-pressed` for the toggle role and a
 * label that flips from "Save …" to "Remove …", so a screen reader never
 * offers to save an already saved listing.
 *
 * The press is idempotent in state but not in motion: every press remounts the
 * glyph through a counter used as its `key`, which replays the 0.4 s pop in
 * both directions, and `animationend` clears the class so the next press can
 * start clean. The listener is native on the button because the pop bubbles
 * from the glyph, which keeps the clear outside React's synthetic event system.
 */
export function SaveButton({ address, saved, onToggle }: SaveButtonProps) {
  const [popKey, setPopKey] = useState(0)
  const [popping, setPopping] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const node = buttonRef.current!
    const clearPop = () => setPopping(false)
    node.addEventListener('animationend', clearPop)
    return () => node.removeEventListener('animationend', clearPop)
  }, [])

  function handleClick() {
    setPopKey((key) => key + 1)
    setPopping(true)
    onToggle()
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${address} from favourites` : `Save ${address} to favourites`}
      onClick={handleClick}
      className="absolute top-2.5 right-2.5 z-[2] grid size-11 place-items-center rounded-full bg-white/95 text-ink shadow-[0_4px_14px_rgba(0,0,0,.18)] transition-[color,transform] duration-200 hover:scale-[1.08] hover:text-heart focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-gold-soft motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <Heart
        key={popKey}
        aria-hidden="true"
        size={22}
        strokeWidth={2}
        strokeLinejoin="round"
        fill={saved ? 'currentColor' : 'none'}
        className={cn(
          'flex-none transition-colors duration-200 motion-reduce:transition-none',
          saved ? 'text-heart' : 'text-ink',
          popping && 'baylist-pop',
        )}
      />
    </button>
  )
}
