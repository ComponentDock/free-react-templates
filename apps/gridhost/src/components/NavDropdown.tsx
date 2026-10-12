import { useState, type KeyboardEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { NavChild, NavLink } from '../lib/site'

export interface NavDropdownProps {
  link: NavLink & { children: NavChild[] }
  active: boolean
  /** True once the header is the solid sticky bar, which tightens the padding. */
  compact: boolean
  onSelect: (label: string) => void
}

/**
 * A header item that owns a child list: the white 170px panel with a 5px brand
 * top border opens on hover or click and closes on Escape, on a child pick, or
 * when the pointer leaves. The trigger reports `aria-expanded` throughout.
 */
export function NavDropdown({ link, active, compact, onSelect }: NavDropdownProps) {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== 'Escape') return

    setOpen(false)
    event.currentTarget.focus()
  }

  function pickChild() {
    close()
    onSelect(link.label)
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
    >
      <div className="flex items-center">
        <a
          href={link.href}
          aria-current={active ? 'page' : undefined}
          onClick={() => onSelect(link.label)}
          className={cn(
            'inline-block font-heading text-[14px] font-medium tracking-[0.02em] uppercase transition-colors focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand',
            compact ? 'px-[13px] py-[27px]' : 'px-[19px] py-[39px]',
            active ? 'text-brand' : 'text-white',
          )}
        >
          {link.label}
        </a>
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          aria-label={`Show the ${link.label} links`}
          onClick={() => setOpen(true)}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className="-ml-[14px] grid h-6 w-6 place-items-center text-white transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-brand"
        >
          <ChevronDown aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>

      {open ? (
        <ul className="absolute top-full left-0 z-[95] w-[170px] border-t-[5px] border-brand bg-surface py-[17px] shadow-dropdown">
          {link.children.map((child) => (
            <li key={child.label} className="ml-[7px]">
              <a
                href={child.href}
                onClick={pickChild}
                className="block px-[10px] py-[6px] text-[14px] text-heading-ink capitalize transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-brand"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}
