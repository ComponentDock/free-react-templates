interface PriceRowProps {
  price: string
  was?: string
}

/**
 * Baseline-aligned price pair. The current price is sale red only when there is
 * an original to strike through; the struck price hides a "Was " for readers.
 */
export function PriceRow({ price, was }: PriceRowProps) {
  return (
    <p className="m-0 flex items-baseline gap-2">
      <span
        className={
          was
            ? 'text-[21px] font-bold leading-[1.45] tracking-[-0.02em] text-sale'
            : 'text-[21px] font-bold leading-[1.45] tracking-[-0.02em] text-ink'
        }
      >
        {price}
      </span>
      {was ? (
        <del className="text-[15px] leading-[1.45] text-muted">
          <span className="sr-only">Was </span>
          {was}
        </del>
      ) : null}
    </p>
  )
}
