import { ArrowUp, SquareChevronUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { logoLabel, menuCloseLabel, menuOpenLabel, scrollTopLabel, socialLinks } from '../data'
import { SocialIcon } from './SocialIcon'

interface RailProps {
  open: boolean
  onToggle: () => void
}

/* Left rail — the always-visible right part of the 420px sidebar shell
   (reference `.menu-right-part`): teal logo mark, hamburger toggle, vertical
   social stack, scroll-to-top caret. It lives INSIDE the sliding sidebar
   element so it lands at the screen's left edge when the panel is closed and
   sits to the right of the opened panel, exactly like the reference. */
export function Rail({ open, onToggle }: RailProps) {
  return (
    <div className="flex w-16 flex-col items-center justify-between bg-charcoal py-6 md:w-[100px]">
      <a
        href="#"
        aria-label={logoLabel}
        className="flex h-12 w-12 items-center justify-center bg-brand text-white transition-opacity hover:opacity-80"
      >
        <ArrowUp className="h-6 w-6" />
      </a>
      <button
        type="button"
        aria-label={open ? menuCloseLabel : menuOpenLabel}
        aria-expanded={open}
        onClick={onToggle}
        className="flex h-12 w-12 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={cn(
            'h-0.5 w-6 bg-white transition-transform duration-300',
            open && 'translate-y-2 rotate-45',
          )}
        />
        <span
          className={cn('h-0.5 w-6 bg-white transition-opacity duration-300', open && 'opacity-0')}
        />
        <span
          className={cn(
            'h-0.5 w-6 bg-white transition-transform duration-300',
            open && '-translate-y-2 -rotate-45',
          )}
        />
      </button>
      <ul className="flex flex-col gap-5">
        {socialLinks.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              aria-label={social.label}
              className="text-white/70 transition-colors hover:text-brand"
            >
              <SocialIcon name={social.name} />
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label={scrollTopLabel}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-white/70 transition-colors hover:text-brand"
      >
        <SquareChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}
