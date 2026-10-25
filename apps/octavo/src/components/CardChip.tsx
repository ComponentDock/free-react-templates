interface CardChipProps {
  label: string
}

/**
 * A white pill pinned 14px into the cover's top-left corner, with the label in
 * the card's own hue. It never wraps — the longest label fits the narrowest
 * card by a wide margin.
 */
export function CardChip({ label }: CardChipProps) {
  return (
    <span className="absolute left-[14px] top-[14px] whitespace-nowrap rounded-full bg-white px-[11px] py-[5px] text-[12.5px] font-semibold text-[var(--chip)] shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
      {label}
    </span>
  )
}
