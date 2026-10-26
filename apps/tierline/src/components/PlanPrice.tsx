interface PlanPriceProps {
  amount: string
  unit: string
}

/**
 * The 48 px figure and its unit, on one baseline. The unit is deliberately not
 * vertically centred — baseline alignment is what puts it 26 px below the
 * amount's top.
 */
export function PlanPrice({ amount, unit }: PlanPriceProps) {
  return (
    <p className="plan-price">
      <span className="plan-amount">{amount}</span>
      <span className="plan-per">{unit}</span>
    </p>
  )
}
