import { SUPPORT_ID, SUPPORT_LEAD, SUPPORT_REST } from '../content'

interface SupportRowProps {
  readonly checked: boolean
  readonly onToggle: (checked: boolean) => void
}

/**
 * The one boolean, as a label wrapping its own checkbox — the correct pattern,
 * and the reason a click anywhere on the row toggles it. `data-checked` carries
 * the state into the stylesheet so a checked row is a solid teal border and a
 * 6 % tint instead of a dashed grey one.
 */
export function SupportRow({ checked, onToggle }: SupportRowProps) {
  return (
    <label className="rr-check" data-checked={checked}>
      <input
        className="rr-box"
        id={SUPPORT_ID}
        type="checkbox"
        checked={checked}
        onChange={(event) => onToggle(event.currentTarget.checked)}
      />
      <span className="rr-check-text">
        <strong>{SUPPORT_LEAD}</strong>
        {SUPPORT_REST}
      </span>
    </label>
  )
}
