import { Home, User, Briefcase, Grid3X3, BookOpen, MessageSquare, Search, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Services', href: '#services', icon: Briefcase },
  { label: 'Portfolio', href: '#portfolio', icon: Grid3X3 },
  { label: 'Blog', href: '#blog', icon: BookOpen },
  { label: 'Testimonials', href: '#testimonials', icon: MessageSquare },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed inset-y-0 right-0 z-50 w-72 bg-black text-white transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex h-full flex-col p-8">
        <button
          className="self-end text-white transition-colors hover:text-[#CA82F8]"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <ul className="mt-8 space-y-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="flex items-center gap-3 text-sm uppercase tracking-widest transition-colors hover:text-[#CA82F8]"
                onClick={onClose}
              >
                <link.icon size={16} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="w-full rounded-full border border-gray-700 bg-transparent py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-[#CA82F8] focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/cardwell-gallery-${i}/100/100`}
              alt={`Gallery thumbnail ${i}`}
              className="aspect-square w-full rounded object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </nav>
  )
}
