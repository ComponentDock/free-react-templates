import { Band, GroupLabel } from './Band'

const CHECKBOXES = [
  { id: 'checkbox-unchecked', label: 'Unchecked', checked: false, disabled: false },
  { id: 'checkbox-checked', label: 'Checked', checked: true, disabled: false },
  {
    id: 'checkbox-unchecked-disabled',
    label: 'Unchecked (Disabled)',
    checked: false,
    disabled: true,
  },
  { id: 'checkbox-checked-disabled', label: 'Checked (Disabled)', checked: true, disabled: true },
]

const RADIOS = [
  { id: 'radio-on', label: 'Radio is on', checked: true, disabled: false },
  { id: 'radio-off', label: 'Radio is off', checked: false, disabled: false },
]

const DISABLED_RADIOS = [
  { id: 'radio-on-disabled', label: 'Radio is on (Disabled)', checked: true, disabled: true },
  { id: 'radio-off-disabled', label: 'Radio is off (Disabled)', checked: false, disabled: true },
]

const SWITCHES = [
  { id: 'switch-off', label: 'Toggle this switch element', checked: false },
  { id: 'switch-on', label: 'Checked switch element', checked: true },
]

const CONTROL = 'h-4 w-4 shrink-0 accent-kit-primary'

const SWITCH =
  'relative h-5 w-9 shrink-0 cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors checked:bg-kit-primary after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform checked:after:translate-x-4 disabled:cursor-not-allowed disabled:opacity-60'

export function ControlsShowcase() {
  return (
    <Band
      title="Checkboxes, Radios, Toggle Buttons"
      lead="The kit's selection controls: checkboxes, radio buttons, and toggle switches in their checked and disabled states."
    >
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <GroupLabel>Checkboxes</GroupLabel>
          <div className="space-y-3">
            {CHECKBOXES.map((box) => (
              <label key={box.id} className="flex items-center gap-3">
                <input
                  id={box.id}
                  type="checkbox"
                  defaultChecked={box.checked}
                  disabled={box.disabled}
                  className={CONTROL}
                />
                <span>{box.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <GroupLabel>Radioboxes</GroupLabel>
          <div className="space-y-3">
            {RADIOS.map((radio) => (
              <label key={radio.id} className="flex items-center gap-3">
                <input
                  id={radio.id}
                  type="radio"
                  name="modkit-radio"
                  defaultChecked={radio.checked}
                  disabled={radio.disabled}
                  className={CONTROL}
                />
                <span>{radio.label}</span>
              </label>
            ))}
            {DISABLED_RADIOS.map((radio) => (
              <label key={radio.id} className="flex items-center gap-3">
                <input
                  id={radio.id}
                  type="radio"
                  name="modkit-radio-disabled"
                  defaultChecked={radio.checked}
                  disabled={radio.disabled}
                  className={CONTROL}
                />
                <span>{radio.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <GroupLabel>Toggle Switch</GroupLabel>
          <div className="space-y-4">
            {SWITCHES.map((toggle) => (
              <label key={toggle.id} className="flex items-center gap-3">
                <input
                  id={toggle.id}
                  type="checkbox"
                  role="switch"
                  defaultChecked={toggle.checked}
                  aria-label={toggle.label}
                  className={SWITCH}
                />
                <span>{toggle.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </Band>
  )
}
