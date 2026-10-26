interface PopularRibbonProps {
  label: string
}

/**
 * The label straddling the top edge of the featured plan. A paragraph, not a
 * heading: the page keeps exactly one h1 and three h2s. Absolutely positioned,
 * so it adds no height to the card.
 */
export function PopularRibbon({ label }: PopularRibbonProps) {
  return <p className="plan-ribbon">{label}</p>
}
