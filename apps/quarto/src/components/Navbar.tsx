import { useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { navItems, person } from '../content'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current!.focus()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <header className="border-b border-line bg-paper py-[22px] max-[575px]:py-[17px]">
      <div className="q-container flex items-center justify-between gap-6 max-[575px]:flex-wrap max-[575px]:gap-[15px]">
        <a
          href="#main"
          className="flex items-center gap-[10px] text-[1.13rem] font-bold tracking-[-0.045em] text-ink no-underline hover:text-ink"
        >
          <span
            aria-hidden="true"
            className="grid size-[33px] place-items-center rounded-full border border-ink font-serif text-[1.13rem] italic"
          >
            {person.monogram}
          </span>
          {person.name}
          <span className="sr-only"> — home</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          aria-controls="site-nav"
          aria-expanded={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="hidden min-h-[44px] rounded-[4px] border border-line bg-transparent px-3 py-2 text-[0.8rem] text-ink max-[575px]:block"
        >
          Menu
        </button>

        <nav
          id="site-nav"
          aria-label="Main navigation"
          className={cn(
            'flex items-center gap-[34px]',
            'max-[575px]:w-full max-[575px]:flex-wrap max-[575px]:gap-[22px]',
            !open && 'max-[575px]:hidden',
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.href === '#work' ? 'page' : undefined}
              onClick={() => setOpen(false)}
              className="text-[0.88rem] text-ink no-underline hover:text-ink hover:underline aria-[current=page]:underline max-[575px]:flex max-[575px]:min-h-[40px] max-[575px]:items-center"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="border-b border-current pb-[3px] text-[0.88rem] text-ink no-underline hover:text-ink max-[575px]:flex max-[575px]:min-h-[40px] max-[575px]:items-center"
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
