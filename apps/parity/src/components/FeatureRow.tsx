import type { Cell, Feature, Plan } from '../content'
import { Cross, Tick } from './Glyphs'

interface FeatureRowProps {
  /** The owning group's `<th id>`, repeated on every cell's `headers` attribute. */
  groupId: string
  feature: Feature
  plans: readonly Plan[]
  open: boolean
}

/** One cell's content: a printed value, a tick or a cross — each glyph with its own words. */
function CellBody({ cell }: { cell: Cell }) {
  if (cell.kind === 'value') {
    return <span className="pt-val">{cell.value}</span>
  }

  if (cell.kind === 'yes') {
    return (
      <>
        <Tick />
        <span className="pt-sr">Included</span>
      </>
    )
  }

  return (
    <>
      <Cross />
      <span className="pt-sr">Not included</span>
    </>
  )
}

/**
 * One feature across the three plans. The row keeps its place in the DOM when a
 * group closes — it is hidden, not unmounted — so the table's sticky header and
 * its column widths never re-flow.
 */
export function FeatureRow({ groupId, feature, plans, open }: FeatureRowProps) {
  return (
    <tr className="pt-row" hidden={!open}>
      <th scope="row" id={feature.id} headers={groupId}>
        {feature.label}
      </th>
      {plans.map((plan, index) => (
        <td
          key={plan.id}
          className={plan.featured ? 'pt-pop' : undefined}
          headers={`${groupId} ${feature.id} ${plan.id}`}
        >
          <CellBody cell={feature.cells[index]!} />
        </td>
      ))}
    </tr>
  )
}
