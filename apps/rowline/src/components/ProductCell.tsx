interface ProductCellProps {
  name: string
  blurb: string
}

export function ProductCell({ name, blurb }: ProductCellProps) {
  return (
    <div className="text-left">
      <span className="block text-ink">{name}</span>
      <span className="block text-[12px] text-subtext">{blurb}</span>
    </div>
  )
}
