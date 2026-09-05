interface SnapCheckboxProps {
  label: string
  defaultChecked?: boolean
  disabled?: boolean
}

export function SnapCheckbox({
  label,
  defaultChecked = false,
  disabled = false,
}: SnapCheckboxProps) {
  return (
    <label
      htmlFor={label}
      className={`group flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 transition-all duration-200 hover:border-green-300 hover:bg-green-50 hover:scale-[1.02] dark:border-gray-700 dark:hover:border-green-700 dark:hover:bg-green-950 ${
        disabled
          ? 'cursor-not-allowed opacity-50 hover:border-gray-200 hover:bg-transparent hover:scale-100 dark:hover:border-gray-700 dark:hover:bg-transparent'
          : ''
      }`}
    >
      <input
        type="checkbox"
        id={label}
        className="h-4 w-4 shrink-0 cursor-pointer rounded border-2 border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-500 dark:bg-gray-800 dark:checked:border-green-500 dark:checked:bg-green-500"
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-label={label}
      />
      <span
        className={`text-sm select-none ${
          disabled
            ? 'cursor-not-allowed text-gray-400 dark:text-gray-500'
            : 'cursor-pointer text-gray-700 group-hover:text-green-700 dark:text-gray-300 dark:group-hover:text-green-300'
        }`}
      >
        {label}
      </span>
    </label>
  )
}
