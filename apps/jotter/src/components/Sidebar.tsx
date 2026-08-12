import { cn } from '@free-react-templates/ui'
import { NAV_LINKS, SOCIAL_LINKS, SOCIAL_PATHS } from '../data'

/* Sidebar (source: the fixed left aside — 25% width, near-white
   rgba(0,0,0,0.04) background, logo wordmark, vertical nav and a
   footer block with the copyright line + social links). */
export function Sidebar() {
  return (
    <aside
      aria-label="Sidebar"
      className="flex h-full w-full flex-col overflow-y-auto bg-sidebar px-12 py-12"
    >
      <p className="mb-10 text-[34px] leading-none font-black text-ink">
        jotter<span className="text-subheading">.</span>
      </p>

      <nav aria-label="Main">
        <ul className="space-y-5">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={cn(
                  'relative inline-block font-menu text-base font-bold transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 after:content-[""] hover:text-ink hover:after:scale-x-100',
                  link === 'Home' ? 'text-ink after:scale-x-100' : 'text-ink/40',
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-10">
        <p className="text-sm text-ink/60">
          Copyright ©2026 All rights reserved · More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Component Dock
          </a>
        </p>
        <div className="mt-6 flex gap-5">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-ink/70 transition-colors hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d={SOCIAL_PATHS[social.label]} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
