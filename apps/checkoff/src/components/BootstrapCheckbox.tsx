interface BootstrapCheckboxProps {
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function BootstrapCheckbox({
  label,
  defaultChecked = false,
  disabled = false,
}: BootstrapCheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        id={label}
        className="peer h-4 w-4 shrink-0 rounded border-2 border-gray-300 bg-white checked:border-bootstrap-blue checked:bg-bootstrap-blue focus:ring-2 focus:ring-bootstrap-blue focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-500 dark:bg-gray-800 dark:checked:border-bootstrap-blue dark:checked:bg-bootstrap-blue"
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-label={label}
      />
      <label
        htmlFor={label}
        className={`text-sm select-none ${
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
