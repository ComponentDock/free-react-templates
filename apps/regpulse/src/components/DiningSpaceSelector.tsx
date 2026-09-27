const PERSON_OPTIONS = [2, 4, 6, 8, 10]

interface DiningSpaceSelectorProps {
  value: number
  onChange: (v: number) => void
}

export function DiningSpaceSelector({ value, onChange }: DiningSpaceSelectorProps) {
  return (
    <div className="pt-5">
      <label className="mb-4 block text-sm font-semibold text-heading">
        Select Your Dining Space
      </label>
      <div className="flex flex-wrap gap-2">
        {PERSON_OPTIONS.map((num) => {
          const isActive = value === num
          return (
            <span
              key={num}
              className={`relative inline-flex items-center justify-center rounded-full border-2 transition-all duration-150 ${
                isActive
                  ? 'border-brand bg-brand px-4 py-1.5 text-sm font-bold text-form-bg'
                  : 'border-radio-inactive bg-white px-2.5 py-1.5 text-sm font-semibold text-radio-text hover:border-brand hover:bg-brand hover:text-white'
              }`}
            >
              <input
                type="radio"
                name="dining_space"
                value={num}
                checked={isActive}
                onChange={() => onChange(num)}
                className="sr-only"
                aria-label={`${num} persons`}
              />
              <span>{num}</span>
              {isActive && <span className="ml-1 text-xs font-bold">Person</span>}
            </span>
          )
        })}
      </div>
    </div>
  )
}
