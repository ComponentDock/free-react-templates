import { COMPONENT_DOCK, CORNER_NOTE, POPULAR_LABEL, type Plan } from '../content'

interface PlanHeaderRowProps {
  plans: readonly Plan[]
}

/**
 * The sticky plan header: a corner cell that hangs its note from the bottom,
 * then one column header per plan. The featured column is marked by fill only —
 * a pale mint wash, a 14 px top radius and a pill inside the cell — never by a
 * border, an offset or a shadow.
 */
export function PlanHeaderRow({ plans }: PlanHeaderRowProps) {
  return (
    <thead>
      <tr>
        <td className="pt-corner">
          <span className="pt-note">{CORNER_NOTE}</span>
        </td>
        {plans.map((plan) => (
          <th
            key={plan.id}
            scope="col"
            id={plan.id}
            className={plan.featured ? 'pt-pop' : undefined}
          >
            {plan.featured ? <span className="pt-tag">{POPULAR_LABEL}</span> : null}
            <span className="pt-plan">{plan.name}</span>
            <span className="pt-price">{plan.price}</span>
            <span className="pt-per">{plan.per}</span>
            <a className="pt-cta" href={COMPONENT_DOCK} target="_blank" rel="noreferrer noopener">
              {plan.cta}
              <span className="pt-sr"> with {plan.name}</span>
            </a>
          </th>
        ))}
      </tr>
    </thead>
  )
}
