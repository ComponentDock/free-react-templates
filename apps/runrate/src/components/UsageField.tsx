import type { CSSProperties } from 'react'

interface UsageFieldProps {
  /** The slider's id — the label's `htmlFor`, and the value pill's prefix. */
  readonly id: string
  readonly label: string
  readonly hint: string
  /** The step *index*, not the amount: the table turns it into a number. */
  readonly step: number
  readonly max: number
  /** The compact pill for this stop, e.g. `1M` or `50 GB`. */
  readonly pill: string
  /** `aria-valuetext` — the human amount, e.g. `1,000,000 requests`. */
  readonly valueText: string
  /** The track's hard stop, e.g. `40%`. */
  readonly fill: string
  readonly onStep: (step: number) => void
}

/**
 * One metered control: a baseline-aligned row with the label and the value
 * pill, the native range input, and its pricing hint. The `--fill` custom
 * property is written onto the input itself because the track lives in a
 * pseudo-element the other side of the shadow boundary — no React prop reaches
 * it any other way.
 */
export function UsageField({
  id,
  label,
  hint,
  step,
  max,
  pill,
  valueText,
  fill,
  onStep,
}: UsageFieldProps) {
  const hintId = `${id}-hint`

  return (
    <div className="rr-field">
      <div className="rr-row">
        <label className="rr-label" htmlFor={id}>
          {label}
        </label>
        <span className="rr-value" id={`${id}-value`} aria-hidden="true">
          {pill}
        </span>
      </div>

      <input
        className="rr-range"
        id={id}
        type="range"
        min={0}
        max={max}
        step={1}
        value={step}
        aria-describedby={hintId}
        aria-valuetext={valueText}
        style={{ ['--fill' as string]: fill } as CSSProperties}
        onChange={(event) => onStep(Number(event.currentTarget.value))}
      />

      <p className="rr-hint" id={hintId}>
        {hint}
      </p>
    </div>
  )
}
