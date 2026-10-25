import { SHOP } from '../content'
import { BagChip } from './BagChip'

interface ShopHeaderProps {
  count: number
  bumped: boolean
}

/**
 * Eyebrow above the headline (not beside it), bag chip bottom-aligned on the
 * right because the flex row aligns to `flex-end`.
 */
export function ShopHeader({ count, bumped }: ShopHeaderProps) {
  return (
    <header className="mb-7 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="m-0 text-[14px] font-medium text-muted">{SHOP.eyebrow}</p>
        <h1 className="m-0 mt-[2px] text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
          {SHOP.title}
        </h1>
      </div>
      <BagChip count={count} bumped={bumped} />
    </header>
  )
}
