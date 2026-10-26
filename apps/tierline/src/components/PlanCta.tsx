interface PlanCtaProps {
  href: string
  label: string
}

/**
 * A full-width block anchor — 302 × 50.5 on a 360 px card. It is a block, not
 * a button: the plan is a document, and the link carries the affordance. The
 * skin (hairline vs gradient) comes from the card it sits in.
 */
export function PlanCta({ href, label }: PlanCtaProps) {
  return (
    <a className="plan-cta" href={href}>
      {label}
    </a>
  )
}
