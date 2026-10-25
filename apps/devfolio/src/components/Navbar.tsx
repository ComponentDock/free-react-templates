import { useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { NAV, PERSON } from '../content'
import { Container } from './ui'

const LINK = 'text-sm leading-[1.75] text-ink no-underline hover:text-brand'

/**
 * 87 px header: hairline rule, mono glyph brand, three section links and one
 * boxed contact pill. Not sticky, no blur, no shadow. Below `sm` the links
 * collapse behind a Menu button that closes on activation and on `Escape`
 * (returning focus to the button).
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) {
      return undefined
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return
      }
      setOpen(false)
      toggleRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="border-b border-line">
      <Container className="flex items-center justify-between gap-5 py-6">
        <a
          href="#/"
          className="flex items-center text-base font-bold tracking-[-0.04em] text-ink no-underline"
        >
          <span aria-hidden="true" className="mr-3 font-mono text-[1.1rem] text-brand">
            {PERSON.glyph}
          </span>
          {PERSON.name}
          <span className="sr-only"> — home</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          aria-controls="site-nav"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-[5px] border border-line px-[13px] py-[7px] text-sm font-semibold text-ink sm:hidden"
        >
          Menu
        </button>

        <nav
          id="site-nav"
          aria-label="Main navigation"
          className={cn(
            'gap-[30px] sm:flex sm:flex-row sm:items-center',
            open ? 'flex flex-col items-start' : 'hidden',
          )}
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={LINK} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-[5px] border border-line px-[13px] py-[7px] text-sm leading-[1.75] text-ink no-underline hover:text-brand"
          >
            Get in touch ↗
          </a>
        </nav>
      </Container>
    </header>
  )
}
