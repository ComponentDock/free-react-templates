import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, nav } from '../data'

const linkBase = 'flex px-[25px] py-8 text-[14px] font-medium uppercase tracking-[0.02em] transition-colors'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 bg-ink">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-4">
        <a
          href="#home"
          className="relative flex h-[91px] min-w-[147px] items-center justify-center bg-brand px-5"
        >
          <span
            aria-hidden="true"
            className="absolute top-0 -right-5 h-full w-[100px] bg-brand [transform:skewX(20deg)]"
          />
          <span className="relative text-[22px] font-extrabold uppercase tracking-[0.06em] text-ink">
            {brand}
          </span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    linkBase,
                    item.active ? 'relative text-ink' : 'text-white/70 hover:text-brand',
                  )}
                >
                  {item.active ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-brand [transform:skewX(20deg)]"
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="flex size-11 items-center justify-center text-white lg:hidden"
        >
          {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 lg:hidden">
          <ul className="px-4 py-2">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    'block px-2 py-3 text-[14px] font-medium uppercase',
                    item.active ? 'bg-brand text-ink' : 'text-white/70 hover:text-brand',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
