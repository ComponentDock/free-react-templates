import { cn } from '@free-react-templates/ui'

interface NavbarProps {
  className?: string
}

const NAV_LINKS = ['Home', 'Rooms', 'About', 'Events', 'Contact'] as const

export function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn(
        'absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-4 lg:px-12',
        className,
      )}
    >
      <a href="/" className="font-heading text-xl font-semibold italic text-white">
        Casamora
      </a>
      <nav aria-label="Main navigation">
        <ul className="hidden items-center gap-6 text-sm font-medium text-white/90 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(
                  'border-b-2 pb-1 transition-colors hover:text-white',
                  link === 'Home' ? 'border-white text-white' : 'border-transparent text-white/80',
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#reservation-form"
        className="hidden rounded-full bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark md:inline-block"
      >
        Reservation Form
      </a>
    </header>
  )
}
