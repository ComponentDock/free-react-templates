import { X } from 'lucide-react'

const navItems = [
  { num: '01', label: 'Home', href: '#home' },
  { num: '02', label: 'Resume', href: '#about' },
  { num: '03', label: 'Services', href: '#services' },
  { num: '04', label: 'Portfolio', href: '#portfolio' },
  { num: '05', label: 'Blog', href: '#blog' },
  { num: '06', label: 'Contact', href: '#contact' },
]

interface SidebarProps {
  menuOpen: boolean
  onClose: () => void
}

export function Sidebar({ menuOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-sidebar text-white transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
        role="navigation"
        aria-label="Sidebar navigation"
      >
        {/* Close button (mobile) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white lg:hidden"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Author photo */}
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://picsum.photos/seed/echo-author/400/400')`,
          }}
          aria-hidden="true"
        />

        {/* Nav links */}
        <nav className="flex-1 px-6 py-8">
          <h1 className="mb-8 text-xl font-bold uppercase tracking-wide">Echo</h1>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.num}>
                <a
                  href={item.href}
                  className="group flex items-center text-sm text-white/70 transition-colors hover:text-brand"
                  onClick={onClose}
                >
                  <span className="mr-3 text-xs text-brand">{item.num}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
