import { cn } from '@free-react-templates/ui'
import type { FlagKind } from '../content'

const FLAG_CLASS: Record<FlagKind, string> = {
  sale: 'bg-sale text-white',
  new: 'bg-ink text-white',
  low: 'bg-surface text-low',
}

interface ProductFlagProps {
  kind: FlagKind
  label: string
}

/** One flag per card, pinned 12 / 12 inside the photo's clipped top-left corner. */
export function ProductFlag({ kind, label }: ProductFlagProps) {
  return (
    <span
      className={cn(
        'absolute left-3 top-3 rounded-[8px] px-[10px] py-1 text-[12.5px] font-bold leading-[1.45]',
        FLAG_CLASS[kind],
      )}
    >
      {label}
    </span>
  )
}
