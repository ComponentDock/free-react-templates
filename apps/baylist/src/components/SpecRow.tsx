import { Bath, BedDouble, Scan } from 'lucide-react'
import type { ListingSpecs } from '../data/listings'

interface SpecRowProps {
  specs: ListingSpecs
}

/**
 * Beds, baths and floor area under one hairline. The row is three auto tracks
 * with `space-between`, so it wraps by arithmetic — the third cell is the
 * longest and wraps first when the card drops under 312 px, and the grid row
 * stretches all three cells with it. No breakpoint, no second layout.
 *
 * The third glyph is a four-corner frame rather than a filled shape: floor
 * area is measured, not counted, and the corner brackets say so. Gold at
 * 3.64:1 is below the text threshold, so the words always carry the meaning
 * and every glyph stays `aria-hidden`.
 */
export function SpecRow({ specs }: SpecRowProps) {
  return (
    <ul className="mt-4 mb-0 grid list-none grid-cols-[repeat(3,auto)] justify-between gap-0 border-t border-rule p-0 pt-3.5 text-[14px] text-muted">
      <li className="inline-flex items-center gap-1.5">
        <BedDouble aria-hidden="true" size={19} strokeWidth={1.7} className="flex-none text-gold" />
        <span>
          <strong className="font-bold text-ink">{specs.beds}</strong> beds
        </span>
      </li>
      <li className="inline-flex items-center gap-1.5 border-l border-rule pl-3.5">
        <Bath aria-hidden="true" size={19} strokeWidth={1.7} className="flex-none text-gold" />
        <span>
          <strong className="font-bold text-ink">{specs.baths}</strong> baths
        </span>
      </li>
      <li className="inline-flex items-center gap-1.5 border-l border-rule pl-3.5">
        <Scan aria-hidden="true" size={19} strokeWidth={1.7} className="flex-none text-gold" />
        <span>
          <strong className="font-bold text-ink">{specs.floor}</strong> sq ft
        </span>
      </li>
    </ul>
  )
}
