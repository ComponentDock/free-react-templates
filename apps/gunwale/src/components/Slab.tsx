import { slabClass } from '../lib/styles'

export interface SlabProps {
  /** True on the row the page is already on, which keeps its slab out at rest. */
  current: boolean
}

/**
 * The gold slab: a `#f1bc31` block covering its row completely, painted behind the row's
 * label and wiped in from the left on hover. Only the wide presentation draws one — the
 * design hides these slabs outright inside the collapsing panel. It is decorative
 * throughout: the row's own colour and `aria-current` are what carry the meaning.
 */
export function Slab({ current }: SlabProps) {
  return <span aria-hidden="true" className={slabClass(current)} />
}
