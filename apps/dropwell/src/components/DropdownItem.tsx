interface DropdownItemProps {
  label?: string
  hasSubmenu?: boolean
  submenuItems?: string[]
  expanded?: boolean
  onClick?: () => void
  onSubmenuToggle?: () => void
  isDivider?: boolean
}

export function DropdownItem({
  label,
  hasSubmenu = false,
  submenuItems = [],
  expanded = true,
  onClick,
  onSubmenuToggle,
  isDivider = false,
}: DropdownItemProps) {
  if (isDivider) {
    return (
      <li className="my-1">
        <hr className="border-t border-gray-100" />
      </li>
    )
  }

  function handleClick() {
    if (hasSubmenu) {
      onSubmenuToggle?.()
    } else {
      onClick?.()
    }
  }

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        className="flex w-full items-center justify-between gap-2 bg-transparent px-4 py-2.5 text-left text-sm text-black/70 transition-colors hover:bg-[#20c997] hover:text-white focus:bg-[#20c997] focus:text-white focus:outline-none"
        role="menuitem"
      >
        <span>{label}</span>
        {hasSubmenu && (
          <svg
            className={`h-3 w-3 transition-transform ${expanded ? 'rotate-90' : ''}`}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 2.5L8 6L4.5 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {hasSubmenu && expanded && submenuItems.length > 0 && (
        <ul className="ml-4 border-l-2 border-gray-100" role="menu">
          {submenuItems.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={onClick}
                className="block w-full bg-transparent px-4 py-2 text-left text-xs text-black/70 transition-colors hover:bg-[#20c997] hover:text-white focus:bg-[#20c997] focus:text-white focus:outline-none"
                role="menuitem"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
