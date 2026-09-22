import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'Rooms', 'Services', 'About Us', 'Blog', 'Contact'] as const

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn(
        'absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-4 lg:px-12',
        className,
      )}
    >
      <a href="/" className="text-xl font-semibold tracking-wide text-white">
        Hotelbreeze
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
    </header>
  )
}
