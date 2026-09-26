import type { View } from '../App'

interface OffcanvasMenuProps {
  open: boolean
  currentView: View
  onNavigate: (view: View) => void
}

const NAV_ITEMS: { label: string; view: View }[] = [
  { label: 'Bio', view: 'bio' },
  { label: 'Portfolio', view: 'portfolio' },
  { label: 'Resume', view: 'resume' },
  { label: 'Contact', view: 'contact' },
]

const SOCIAL_LINKS = [
  { label: 'Twitter', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
]

export function OffcanvasMenu({ open, currentView, onNavigate }: OffcanvasMenuProps) {
  return (
    <div
      className="fixed top-0 right-0 h-screen w-[240px] bg-navy z-50 p-[20px_30px] overflow-y-auto transition-transform duration-300 ease-in-out"
      style={{ transform: open ? 'translateX(0)' : 'translateX(240px)' }}
      role="dialog"
      aria-label="Navigation menu"
      aria-hidden={!open}
    >
      <nav aria-label="Offcanvas navigation">
        <ul className="mb-8 mt-12 space-y-4">
          {NAV_ITEMS.map(({ label, view }) => (
            <li key={view}>
              <button
                onClick={() => onNavigate(view)}
                className={`text-sm uppercase tracking-[0.1em] transition-colors duration-300 ${
                  view === currentView ? 'text-brand' : 'text-white hover:text-brand'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-4">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-white text-xs uppercase tracking-[0.1em] hover:text-brand transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
