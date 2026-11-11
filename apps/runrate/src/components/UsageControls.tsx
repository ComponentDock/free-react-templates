import {
  CALLS_HINT,
  CALLS_ID,
  CALLS_LABEL,
  FORM_LABEL,
  STORAGE_HINT,
  STORAGE_ID,
  STORAGE_LABEL,
} from '../content'
import { CALLS_MAX, STORAGE_MAX, type Estimate } from '../pricing'
import { SupportRow } from './SupportRow'
import { UsageField } from './UsageField'

interface UsageControlsProps {
  readonly estimate: Estimate
  readonly callsIndex: number
  readonly storageIndex: number
  readonly support: boolean
  readonly onCallsChange: (step: number) => void
  readonly onStorageChange: (step: number) => void
  readonly onSupportChange: (checked: boolean) => void
}

/**
 * The dark control panel: two metered sliders and the support toggle, in one
 * column with a 34px gap. The form exists for the grouping (and to swallow the
 * `submit` that pressing Enter would otherwise fire), not for a submit button —
 * the reference has none.
 */
export function UsageControls({
  estimate,
  callsIndex,
  storageIndex,
  support,
  onCallsChange,
  onStorageChange,
  onSupportChange,
}: UsageControlsProps) {
  return (
    <form
      className="rr-controls"
      aria-label={FORM_LABEL}
      onSubmit={(event) => event.preventDefault()}
    >
      <UsageField
        id={CALLS_ID}
        label={CALLS_LABEL}
        hint={CALLS_HINT}
        step={callsIndex}
        max={CALLS_MAX}
        pill={estimate.callsLabel}
        valueText={estimate.callsValueText}
        fill={estimate.callsFill}
        onStep={onCallsChange}
      />

      <UsageField
        id={STORAGE_ID}
        label={STORAGE_LABEL}
        hint={STORAGE_HINT}
        step={storageIndex}
        max={STORAGE_MAX}
        pill={estimate.storageLabel}
        valueText={estimate.storageValueText}
        fill={estimate.storageFill}
        onStep={onStorageChange}
      />

      <SupportRow checked={support} onToggle={onSupportChange} />
    </form>
  )
}
