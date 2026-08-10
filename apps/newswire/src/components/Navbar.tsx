import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/** Sticky desktop navigation bar (B612 Mono, uppercase links, lime active underline). */
export function Navbar() {
  return (
    <nav aria-label="Main" className="hidden border-b border-line bg-white font-mono lg:block">
      <ul className="mx-auto flex max-w-6xl items-center gap-7 px-4 lg:px-6">
        {navLinks.map((link) => {
          const active = link === 'Home'
          return (
            <li key={link}>
              <a
                href="#top"
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'inline-block border-b-2 py-4 text-[0.8rem] uppercase tracking-wide transition-colors',
                  active
                    ? 'border-accent text-ink'
                    : 'border-transparent text-ink/60 hover:border-accent hover:text-ink',
                )}
              >
                {link}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
