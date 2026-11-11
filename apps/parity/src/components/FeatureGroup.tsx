import type { Group, Plan } from '../content'
import { FeatureRow } from './FeatureRow'
import { Chevron } from './Glyphs'

interface FeatureGroupProps {
  group: Group
  plans: readonly Plan[]
  open: boolean
  onToggle: (id: string) => void
}

/**
 * A `<tbody>` per group: one row of heading that holds the whole-width toggle,
 * then the group's feature rows. The count rides along `aria-hidden` so the
 * toggle's name stays the group title.
 */
export function FeatureGroup({ group, plans, open, onToggle }: FeatureGroupProps) {
  return (
    <tbody className="pt-group" id={group.bodyId}>
      <tr className="pt-ghead">
        <th scope="rowgroup" colSpan={4} id={group.id}>
          <button
            type="button"
            className="pt-toggle"
            aria-expanded={open}
            aria-controls={group.bodyId}
            onClick={() => onToggle(group.id)}
          >
            <span>{group.title}</span>
            <span className="pt-count" aria-hidden="true">
              {group.features.length} features
            </span>
            <Chevron />
          </button>
        </th>
      </tr>
      {group.features.map((feature) => (
        <FeatureRow
          key={feature.id}
          groupId={group.id}
          feature={feature}
          plans={plans}
          open={open}
        />
      ))}
    </tbody>
  )
}
