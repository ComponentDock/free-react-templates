import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'

export interface Category {
  name: string
  items: string[]
}

interface DropdownProps {
  categories: Category[]
}

export function Dropdown({ categories }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggle = useCallback(() => setOpen((o) => !o), [])

  useEffect(() => {
    if (!open) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div ref={containerRef} className="relative inline-block w-full max-w-md">
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          'flex w-full items-center justify-between rounded border px-4 py-3 text-left text-sm font-medium transition-colors',
          open
            ? 'border-brand bg-brand text-white'
            : 'border-border bg-white text-text hover:border-brand hover:text-brand',
        )}
      >
        <span>Select Category</span>
        <svg
          className={cn('h-4 w-4 transition-transform', open && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 right-0 top-full z-50 mt-1 rounded border border-border bg-white shadow-lg"
        >
          {categories.map((category) => (
            <div key={category.name}>
              <div className="border-b border-border bg-surface-alt px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {category.name}
                </span>
              </div>
              <ul className="py-1">
                {category.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text transition-colors hover:bg-brand/10 hover:text-brand"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
