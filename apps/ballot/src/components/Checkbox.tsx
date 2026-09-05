interface CheckboxProps {
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function Checkbox({ label, defaultChecked = false, disabled = false }: CheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={label}
        className={`h-5 w-5 shrink-0 rounded border-2 border-gray-300 bg-white accent-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-500 dark:bg-gray-800`}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-label={label}
      />
      <label
        htmlFor={label}
        className={`text-base select-none ${
          disabled
            ? 'cursor-not-allowed text-gray-400 dark:text-gray-500'
            : 'cursor-pointer text-gray-700 dark:text-gray-300'
        }`}
      >
        {label}
      </label>
    </div>
  )
}
