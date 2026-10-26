import { Tick } from './Tick'

interface PlanListProps {
  title: string
  features: string[]
}

/**
 * The rule + label, then the feature rows. The label is a paragraph so the page
 * keeps three h2s; the copy stays sentence case and the stylesheet uppercases
 * it. Rows are a grid with a 10 px gap, each opening with a check disc.
 */
export function PlanList({ title, features }: PlanListProps) {
  return (
    <>
      <p className="plan-list-title">{title}</p>
      <ul className="plan-list">
        {features.map((feature) => (
          <li key={feature}>
            <Tick />
            {feature}
          </li>
        ))}
      </ul>
    </>
  )
}
