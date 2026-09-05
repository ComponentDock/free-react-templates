import { useRef, useEffect } from 'react'

interface DropdownButtonProps {
  label: string
  items: string[]
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
  direction: 'dropdown' | 'dropup' | 'dropright' | 'dropleft'
  split?: boolean
  activeIndex?: number
}

function getMenuPosition(direction: string): string {
  switch (direction) {
    case 'dropup':
      return 'bottom-full mb-2 left-0'
    case 'dropright':
      return 'top-0 left-full ml-2'
    case 'dropleft':
      return 'top-0 right-full mr-2'
    default:
      return 'top-full mt-2 left-0'
  }
}

export function DropdownButton({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
  direction,
  split = false,
}: DropdownButtonProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.querySelector<HTMLElement>('[data-active]')?.focus()
    }
  }, [isOpen])

  function handleItemClick(item: string) {
    onClose()
    void item
  }

  const menuPosition = getMenuPosition(direction)

  if (split) {
    return (
      <div className="relative inline-flex">
        <button
          type="button"
          className="rounded-l-[5px] border border-[#0075f6] bg-[#0075f6] px-4 py-3 text-sm font-normal text-white shadow-[0_10px_20px_-6px_rgba(0,0,0,0.12)] transition-all hover:bg-[#005dc3] hover:shadow-lg focus:outline-none"
        >
          {label.replace('Split ', '')}
        </button>
        <button
          type="button"
          onClick={onToggle}
          aria-haspopup="true"
          aria-expanded={isOpen}
          className="flex items-center justify-center rounded-r-[5px] border border-l-0 border-[#0075f6] bg-[#0075f6] px-3 py-3 text-white shadow-[0_10px_20px_-6px_rgba(0,0,0,0.12)] transition-all hover:bg-[#005dc3] hover:shadow-lg focus:outline-none"
          aria-label={`Toggle ${label}`}
        >
          <svg
            className="h-3 w-3"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            ref={menuRef}
            className={`absolute z-50 min-w-[160px] overflow-hidden rounded-[5px] border border-transparent bg-white shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)] ${menuPosition}`}
            role="menu"
          >
            {items.map((item, i) =>
              item === '---' ? (
                <div key={`div-${i}`} className="my-0 border-t border-gray-100" />
              ) : (
                <button
                  key={item}
                  data-active={i === 0 ? '' : undefined}
                  onClick={() => handleItemClick(item)}
                  className="block w-full bg-transparent px-4 py-2.5 text-left text-sm text-black/70 transition-colors hover:bg-[#0075f6] hover:text-white focus:bg-[#0075f6] focus:text-white focus:outline-none"
                  role="menuitem"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={onToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center gap-2 rounded-[5px] border border-[#0075f6] bg-[#0075f6] px-4 py-3 text-sm font-normal text-white shadow-[0_10px_20px_-6px_rgba(0,0,0,0.12)] transition-all hover:bg-[#005dc3] hover:shadow-lg focus:outline-none"
      >
        {label}
        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className={`absolute z-50 min-w-[160px] overflow-hidden rounded-[5px] border border-transparent bg-white shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)] ${menuPosition}`}
          role="menu"
        >
          {items.map((item, i) =>
            item === '---' ? (
              <div key={`div-${i}`} className="my-0 border-t border-gray-100" />
            ) : (
              <button
                key={item}
                data-active={i === 0 ? '' : undefined}
                onClick={() => handleItemClick(item)}
                className="block w-full bg-transparent px-4 py-2.5 text-left text-sm text-black/70 transition-colors hover:bg-[#0075f6] hover:text-white focus:bg-[#0075f6] focus:text-white focus:outline-none"
                role="menuitem"
              >
                {item}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  )
}
