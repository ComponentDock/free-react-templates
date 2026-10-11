import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const CHECKBOXES = [
  { id: 'sorbet-cb-off', label: 'Unchecked', checked: false, disabled: false },
  { id: 'sorbet-cb-on', label: 'Checked', checked: true, disabled: false },
  { id: 'sorbet-cb-disabled-off', label: 'Disabled Unchecked', checked: false, disabled: true },
  { id: 'sorbet-cb-disabled-on', label: 'Disabled Checked', checked: true, disabled: true },
]

const RADIOS = [
  { id: 'sorbet-radio-off', label: 'Radio is off', checked: false, disabled: false },
  { id: 'sorbet-radio-on', label: 'Radio is on', checked: true, disabled: false },
  {
    id: 'sorbet-radio-disabled-off',
    label: 'Disabled Radio is off',
    checked: false,
    disabled: true,
  },
  { id: 'sorbet-radio-disabled-on', label: 'Disabled radio is on', checked: true, disabled: true },
]

const TOGGLES = [
  { id: 'sorbet-toggle-on', label: 'Toggle is on' },
  { id: 'sorbet-toggle-off', label: 'Toggle is Off' },
]

/** Fill-style checkboxes and radios plus the two switch style toggles. */
export function ControlsShowcase() {
  const [toggles, setToggles] = useState<boolean[]>([true, false])

  const flip = (index: number) =>
    setToggles((current) => current.map((value, i) => (i === index ? !value : value)))

  return (
    <ShowcaseSection id="checkRadios">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="mb-5 text-[28px] font-medium text-heading">Checkboxes</h2>
          <div className="space-y-3">
            {CHECKBOXES.map(({ id, label, checked, disabled }) => (
              <label
                key={id}
                htmlFor={id}
                className={cn(
                  'flex items-center gap-3 text-sm',
                  disabled ? 'text-disabled' : 'text-body',
                )}
              >
                <input
                  id={id}
                  type="checkbox"
                  defaultChecked={checked}
                  disabled={disabled}
                  className="h-4 w-4 cursor-pointer accent-primary-500 disabled:cursor-not-allowed"
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-[28px] font-medium text-heading">Radio Buttons</h2>
          <div className="space-y-3">
            {RADIOS.map(({ id, label, checked, disabled }) => (
              <label
                key={id}
                htmlFor={id}
                className={cn(
                  'flex items-center gap-3 text-sm',
                  disabled ? 'text-disabled' : 'text-body',
                )}
              >
                <input
                  id={id}
                  type="radio"
                  name="sorbet-radio-group"
                  defaultChecked={checked}
                  disabled={disabled}
                  className="h-4 w-4 cursor-pointer accent-primary-500 disabled:cursor-not-allowed"
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-[28px] font-medium text-heading">Toggle Buttons</h2>
          <div className="space-y-4">
            {TOGGLES.map(({ id, label }, index) => (
              <div key={id} className="flex items-center gap-3 text-sm text-body">
                <button
                  type="button"
                  role="switch"
                  aria-checked={toggles[index]}
                  aria-label={label}
                  onClick={() => flip(index)}
                  className={cn(
                    'flex h-7 w-16 cursor-pointer items-center rounded-full px-1 transition-colors',
                    toggles[index] ? 'justify-end bg-primary-500' : 'justify-start bg-gray-300',
                  )}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[8px] uppercase text-heading">
                    {toggles[index] ? 'ON' : ''}
                  </span>
                </button>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShowcaseSection>
  )
}
