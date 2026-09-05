import { useState, useId } from 'react'
import { cn } from '@free-react-templates/ui'

interface TeleportToggleProps {
  caption: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function TeleportToggle({
  caption,
  defaultChecked = false,
  disabled = false,
}: TeleportToggleProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const id = useId()

  return (
    <div className="mb-6">
      <span className="mb-1 block text-sm text-[#6c757d]" style={{ fontSize: '80%' }}>
        {caption}
      </span>
      <label
        htmlFor={id}
        className={cn(
          'inline-flex items-center',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
      >
        <span className="mr-2.5 text-sm text-gray-900 dark:text-white">Off</span>
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          checked={checked}
          disabled={disabled}
          onChange={() => setChecked((c) => !c)}
          aria-label={caption}
        />
        <span
          className={cn(
            'relative inline-block h-5 w-8 rounded-2xl border-2 border-[#ccc] bg-white transition-all duration-300',
            'peer-checked:border-[#4cd964]',
            disabled && 'opacity-40',
          )}
          style={{ overflow: 'hidden' }}
        >
          {/* Left dot (grey, visible when unchecked, exits when checked) */}
          <span
            className={cn(
              'absolute top-0.5 left-0.5 h-3 w-3 rounded-full bg-[#ccc] transition-all duration-300',
              'peer-checked:-left-3.5',
            )}
          />
          {/* Right dot (grey when unchecked off-track, green when checked enters) */}
          <span
            className={cn(
              'absolute top-0.5 h-3 w-3 rounded-full transition-all duration-300',
              'bg-[#ccc]',
              'peer-checked:right-0.5 peer-checked:bg-[#4cd964]',
            )}
            style={{ right: '-14px' }}
          />
        </span>
        <span className="ml-2.5 text-sm text-gray-900 dark:text-white">On</span>
      </label>
    </div>
  )
}
