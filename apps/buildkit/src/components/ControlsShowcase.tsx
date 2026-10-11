import { ShowcaseSection, SubHeading } from './section'

const CHECKBOXES = [
  { id: 'buildkit-cb-off', label: 'Unchecked', checked: false, disabled: false },
  { id: 'buildkit-cb-on', label: 'Checked', checked: true, disabled: false },
  { id: 'buildkit-cb-disabled-off', label: 'Disabled Unchecked', checked: false, disabled: true },
  { id: 'buildkit-cb-disabled-on', label: 'Disabled Checked', checked: true, disabled: true },
]

const RADIOS = [
  { id: 'buildkit-radio-off', label: 'Radio os off', checked: false, disabled: false },
  { id: 'buildkit-radio-on', label: 'Radio is on', checked: true, disabled: false },
  { id: 'buildkit-radio-disabled', label: 'Disabled radio is off', checked: false, disabled: true },
]

const TOGGLES = [
  { id: 'buildkit-toggle-on', label: 'Toggle is on', checked: true },
  { id: 'buildkit-toggle-off', label: 'Toggle is off', checked: false },
]

export function ControlsShowcase() {
  return (
    <ShowcaseSection id="checkRadios" title="Form controls">
      <div className="space-y-4">
        <SubHeading>Checkboxes</SubHeading>
        <div className="flex flex-wrap gap-6">
          {CHECKBOXES.map(({ id, label, checked, disabled }) => (
            <label key={id} htmlFor={id} className="flex items-center gap-2 text-sm text-body">
              <input
                id={id}
                type="checkbox"
                defaultChecked={checked}
                disabled={disabled}
                className="h-4 w-4 accent-primary-600"
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Radio Buttons</SubHeading>
        <div className="flex flex-wrap gap-6">
          {RADIOS.map(({ id, label, checked, disabled }) => (
            <label key={id} htmlFor={id} className="flex items-center gap-2 text-sm text-body">
              <input
                id={id}
                type="radio"
                name="buildkit-radio-group"
                defaultChecked={checked}
                disabled={disabled}
                className="h-4 w-4 accent-primary-600"
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <SubHeading>Toggle Buttons</SubHeading>
        <div className="space-y-3">
          {TOGGLES.map(({ id, label, checked }) => (
            <label key={id} htmlFor={id} className="flex items-center gap-3 text-sm text-body">
              <input
                id={id}
                type="checkbox"
                role="switch"
                aria-label={label}
                defaultChecked={checked}
                className="h-5 w-5 accent-success"
              />
              {label}
            </label>
          ))}
        </div>
      </div>
    </ShowcaseSection>
  )
}
