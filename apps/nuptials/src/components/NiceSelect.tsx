import { useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import type { NiceOption } from '../lib/site'
import { useDisclosure } from '../lib/use-disclosure'
import {
  fieldLabelClass,
  selectCaretClass,
  selectListClass,
  selectOptionClass,
  selectTriggerClass,
  selectWrapClass,
} from '../lib/styles'

export interface NiceSelectProps {
  id: string
  label: string
  options: readonly NiceOption[]
  value: NiceOption
  onChange: (option: NiceOption) => void
}

/**
 * The design's pickers, which are not `<select>` elements at all but a disclosure holding a list of
 * rows. This one keeps that shape and adds what the markup never carried: a name built from the
 * field's label and its current value, `aria-expanded`, and a list whose rows are real buttons that
 * a keyboard can reach and activate.
 */
export function NiceSelect({ id, label, options, value, onChange }: NiceSelectProps) {
  const { isOpen, toggle, close } = useDisclosure()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close])

  return (
    <div className={selectWrapClass}>
      <span id={`${id}-label`} className={fieldLabelClass}>
        {label}
      </span>

      <button
        id={id}
        type="button"
        className={selectTriggerClass}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-list`}
        aria-labelledby={`${id}-label ${id}-value`}
        onClick={toggle}
      >
        <span id={`${id}-value`}>{value.label}</span>
        <ChevronDown aria-hidden="true" className={selectCaretClass} />
      </button>

      {isOpen ? (
        <ul id={`${id}-list`} role="listbox" aria-labelledby={`${id}-label`} className={selectListClass}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === value.value}
                className={selectOptionClass(option.value === value.value)}
                onClick={() => {
                  onChange(option)
                  close()
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
