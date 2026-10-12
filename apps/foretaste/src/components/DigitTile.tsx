import { useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'

/** How long a changed digit takes to flip out and back. */
export const FLIP_MS = 500

export interface DigitTileProps {
  /** One zero-padded digit of the countdown. */
  digit: string
  className?: string
}

/**
 * One 90×120 navy tile holding a 120px Quantico digit. A tile only animates
 * when its own digit changes: it plays the half-turn flip for 500ms and then
 * settles back, so an unchanged digit never moves.
 */
export function DigitTile({ digit, className }: DigitTileProps) {
  const previous = useRef(digit)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    if (previous.current === digit) {
      return undefined
    }

    previous.current = digit
    setFlipping(true)
    const timer = setTimeout(() => {
      setFlipping(false)
    }, FLIP_MS)
    return () => clearTimeout(timer)
  }, [digit])

  return (
    <li
      data-testid="digit-tile"
      className={cn(
        'mx-[3px] mt-[3px] mb-[80px] flex h-[120px] w-[90px] items-center justify-center',
        'rounded-[10px] bg-tile font-digit text-[120px] leading-none text-white',
        flipping && 'animate-turn',
        className,
      )}
    >
      {digit}
    </li>
  )
}
