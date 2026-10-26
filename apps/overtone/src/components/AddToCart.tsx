import { useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ADD_LABEL, ADDED_LABEL } from '../data/site'
import { ADDED_DELAY } from '../lib/motion'

interface AddToCartProps {
  readonly onAdd: () => void
}

/**
 * The buy bar. The label confirms for 1.2 s — the bar is the page's primary
 * action, so a press has to produce something visible even before the cart is
 * opened. The badge in the bar is the lasting record; this is the flash.
 */
export function AddToCart({ onAdd }: AddToCartProps) {
  const [added, setAdded] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (timer.current !== null) window.clearTimeout(timer.current)
    },
    [],
  )

  const handleClick = () => {
    onAdd()
    setAdded(true)
    if (timer.current !== null) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      setAdded(false)
      timer.current = null
    }, ADDED_DELAY)
  }

  return (
    <button type="button" className={cn('ot-add', added && 'is-added')} onClick={handleClick}>
      {added ? ADDED_LABEL : ADD_LABEL}
    </button>
  )
}
