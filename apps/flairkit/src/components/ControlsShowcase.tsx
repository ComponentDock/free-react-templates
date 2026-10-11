import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band, SectionHeading } from './Band'

interface ControlDemo {
  label: string
  initialChecked: boolean
  disabled?: boolean
}

const CHECKBOXES: ControlDemo[] = [
  { label: 'Unchecked', initialChecked: false },
  { label: 'Checked', initialChecked: true },
  { label: 'Unchecked (Disabled)', initialChecked: false, disabled: true },
  { label: 'Checked (Disabled)', initialChecked: true, disabled: true },
]

const RADIO_GROUPS: { name: string; disabled?: boolean; initial: number; items: string[] }[] = [
  { name: 'flair-radio', initial: 0, items: ['Radio is on', 'Radio is off'] },
  {
    name: 'flair-radio-locked',
    initial: 0,
    disabled: true,
    items: ['Radio is on (Disabled)', 'Radio is off (Disabled)'],
  },
]

const SWITCHES: ControlDemo[] = [
  { label: 'Toggle this switch element', initialChecked: false },
  { label: 'Checked switch element', initialChecked: true },
]

/** One control row: a styled mark plus the demo caption, driven by React state. */
function ToggleRow({
  label,
  mark,
  checked,
  disabled,
  name,
  onChange,
}: {
  label: string
  mark: 'checkbox' | 'radio' | 'switch'
  checked: boolean
  disabled?: boolean
  name?: string
  onChange: () => void
}) {
  return (
    <label className={cn('flex items-center gap-2', disabled && 'opacity-60')}>
      <input
        type="checkbox"
        role={mark === 'radio' ? 'radio' : mark}
        name={name}
        className="sr-only"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {mark === 'switch' ? (
        <span
          aria-hidden="true"
          className={cn(
            'flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors',
            checked ? 'justify-end bg-flair-primary' : 'justify-start bg-gray-300',
          )}
        >
          <span className="h-4 w-4 rounded-full bg-white shadow" />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={cn(
            'flex h-4 w-4 shrink-0 items-center justify-center border bg-white',
            mark === 'radio' ? 'rounded-full' : 'rounded-sm',
            checked ? 'border-flair-primary' : 'border-control',
          )}
        >
          {mark === 'radio' ? (
            <span
              className={cn('h-2 w-2 rounded-full bg-flair-primary', !checked && 'opacity-0')}
            />
          ) : (
            <Check
              className={cn('h-3 w-3 text-flair-primary', !checked && 'opacity-0')}
              strokeWidth={3}
            />
          )}
        </span>
      )}
      <span>{label}</span>
    </label>
  )
}

/** Checkboxes, radioboxes and toggle switches on a light band. */
export function ControlsShowcase() {
  const [checked, setChecked] = useState(() => CHECKBOXES.map((item) => item.initialChecked))
  const [selectedRadio, setSelectedRadio] = useState(() =>
    RADIO_GROUPS.map((group) => group.initial),
  )
  const [switches, setSwitches] = useState(() => SWITCHES.map((item) => item.initialChecked))

  return (
    <Band className="bg-band">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <SectionHeading className="mb-3 text-[1.75rem]">Checkboxes</SectionHeading>
          <div className="space-y-3">
            {CHECKBOXES.map((item, index) => (
              <ToggleRow
                key={item.label}
                label={item.label}
                mark="checkbox"
                checked={Boolean(checked[index])}
                disabled={item.disabled}
                onChange={() =>
                  setChecked((previous) =>
                    previous.map((value, i) => (i === index ? !value : value)),
                  )
                }
              />
            ))}
          </div>
        </div>

        <div>
          <SectionHeading className="mb-3 text-[1.75rem]">Radioboxes</SectionHeading>
          <div className="space-y-6">
            {RADIO_GROUPS.map((group, groupIndex) => (
              <div key={group.name} className="space-y-3">
                {group.items.map((label, itemIndex) => (
                  <ToggleRow
                    key={label}
                    label={label}
                    mark="radio"
                    name={group.name}
                    checked={selectedRadio[groupIndex] === itemIndex}
                    disabled={group.disabled}
                    onChange={() =>
                      setSelectedRadio((previous) =>
                        previous.map((value, i) => (i === groupIndex ? itemIndex : value)),
                      )
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading className="mb-3 text-[1.75rem]">Toggle Buttons</SectionHeading>
          <div className="space-y-3">
            {SWITCHES.map((item, index) => (
              <ToggleRow
                key={item.label}
                label={item.label}
                mark="switch"
                checked={Boolean(switches[index])}
                onChange={() =>
                  setSwitches((previous) =>
                    previous.map((value, i) => (i === index ? !value : value)),
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Band>
  )
}
