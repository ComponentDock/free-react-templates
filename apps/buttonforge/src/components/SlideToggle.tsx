import { useState } from 'react'

interface ToggleSwitchProps {
  defaultChecked?: boolean
  label: string
}

function ToggleSwitch({ defaultChecked = false, label }: ToggleSwitchProps) {
  const [on, setOn] = useState(defaultChecked)

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        role="checkbox"
        aria-checked={on}
        aria-label={label}
        onClick={() => setOn((prev) => !prev)}
        className={`relative h-9 w-[74px] rounded-full transition-colors duration-300 ${
          on ? 'bg-red-100' : 'bg-blue-100'
        }`}
      >
        <span
          className={`absolute top-1 h-7 w-7 rounded-full text-[10px] font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.18,0.89,0.35,1.15)] ${
            on ? 'left-[42px] bg-red-500' : 'left-1 bg-sky-500'
          } flex items-center justify-center`}
        >
          {on ? 'OFF' : 'ON'}
        </span>
      </button>
      <span className="text-sm text-gray-600">Toggle is {on ? 'on' : 'off'}</span>
    </div>
  )
}

export function SlideToggle() {
  return (
    <div className="flex flex-col gap-4">
      <ToggleSwitch defaultChecked={false} label="Toggle 1" />
      <ToggleSwitch defaultChecked={true} label="Toggle 2" />
    </div>
  )
}
