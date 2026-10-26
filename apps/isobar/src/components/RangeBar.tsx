import { rangeFill } from '../lib/range'

interface RangeBarProps {
  readonly lo: number
  readonly hi: number
}

/**
 * A 6 px track with a gradient fill positioned by two percentages of the shared
 * 12–28 °C window. Decoration only: the low and high are adjacent text, so the
 * bar can stay hidden from assistive tech.
 */
export function RangeBar({ lo, hi }: RangeBarProps) {
  return (
    <span aria-hidden="true" className="relative block h-1.5 rounded-full bg-track">
      <span
        className="absolute inset-y-0 rounded-full bg-[linear-gradient(90deg,#38bdf8,#fbbf24_60%,#f97316)]"
        style={rangeFill(lo, hi)}
      />
    </span>
  )
}
