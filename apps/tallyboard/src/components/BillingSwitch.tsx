import { SAVE_LABEL, SIDE_LABELS, SWITCH_LABEL } from '../content'

interface BillingSwitchProps {
  annual: boolean
  onToggle: () => void
  status: string
}

/**
 * The billing row and the live region that announces the change.
 *
 * The toggle is an `aria-pressed` button named after its state ("Annual
 * billing"), so a screen reader reads "pressed" / "not pressed" rather than an
 * action it cannot undo. Both visible side labels are decorative and hidden;
 * the savings chip's meaning is carried by the status sentence.
 */
export function BillingSwitch({ annual, onToggle, status }: BillingSwitchProps) {
  return (
    <>
      <div className="tb-billing">
        <span className={annual ? 'tb-side' : 'tb-side tb-side--on'} aria-hidden="true">
          {SIDE_LABELS.monthly}
        </span>

        <button type="button" className="tb-switch" aria-pressed={annual} onClick={onToggle}>
          <span className="tb-sr">{SWITCH_LABEL}</span>
          <span className="tb-knob" aria-hidden="true" />
        </button>

        <span className={annual ? 'tb-side tb-side--on' : 'tb-side'} aria-hidden="true">
          {SIDE_LABELS.annual} <span className="tb-save">{SAVE_LABEL}</span>
        </span>
      </div>

      <p className="tb-sr" role="status" aria-live="polite">
        {status}
      </p>
    </>
  )
}
