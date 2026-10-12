import { useRef, useState, type KeyboardEvent } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HOSTING_LINKS, HOSTING_SUB_LINKS } from '../lib/nav'

export interface HostingDropdownProps {
  active: boolean
  onSelect: () => void
}

const ROW_CLASS =
  'block w-full px-5 py-[5px] text-left text-[16px] text-slate transition-colors hover:text-lime focus-visible:bg-soft focus-visible:text-lime focus-visible:outline-none'

const PANEL_CLASS =
  'min-w-[200px] border-r border-b border-l border-line-soft bg-surface py-[10px] shadow-[0_2px_10px_-2px_rgba(0,0,0,0.25)]'

/**
 * The `Hosting` navigation entry: a white panel that drops from the strip on
 * hover, click or keyboard (Enter / Space / ArrowDown), with a nested
 * sub-menu that opens alongside it. `Escape` closes everything and returns
 * focus to the trigger; moving focus out of the group closes it too.
 */
export function HostingDropdown({ active, onSelect }: HostingDropdownProps) {
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const wrapperRef = useRef<HTMLLIElement>(null)

  function close() {
    setOpen(false)
    setSubOpen(false)
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setOpen(true)
    }
  }

  function handleWrapperKeyDown(event: KeyboardEvent<HTMLLIElement>) {
    if (event.key === 'Escape' && open) {
      event.preventDefault()
      close()
      triggerRef.current?.focus()
    }
  }

  return (
    <li
      ref={wrapperRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onKeyDown={handleWrapperKeyDown}
      onBlur={(event) => {
        const next = event.relatedTarget
        if (!next || !wrapperRef.current?.contains(next)) close()
      }}
      className="relative px-[5px]"
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => {
          setOpen(true)
          setSubOpen(false)
          onSelect()
        }}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          'inline-flex items-center gap-1 px-[10px] py-[10px] text-[16px] leading-none tracking-[0.05em] transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime',
          active ? 'text-white' : 'text-white/60',
        )}
      >
        Hosting
        <ChevronDown
          aria-hidden="true"
          className={cn('h-4 w-4 transition-transform duration-300', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-[150]">
          <span
            aria-hidden="true"
            className="absolute -top-[10px] left-[20%] block h-0 w-0 border-x-[10px] border-b-[10px] border-x-transparent border-b-white"
          />
          <ul className={PANEL_CLASS}>
            {HOSTING_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={onSelect} className={ROW_CLASS}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="relative" onMouseEnter={() => setSubOpen(true)}>
              <button
                type="button"
                aria-expanded={subOpen}
                onClick={() => setSubOpen(true)}
                onFocus={() => setSubOpen(true)}
                className={cn(ROW_CLASS, 'flex items-center justify-between gap-2')}
              >
                Sub Menu
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
              </button>

              {subOpen && (
                <ul className={cn(PANEL_CLASS, 'absolute top-0 left-full')}>
                  {HOSTING_SUB_LINKS.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} onClick={onSelect} className={ROW_CLASS}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </li>
  )
}
