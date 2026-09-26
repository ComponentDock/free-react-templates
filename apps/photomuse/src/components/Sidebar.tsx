import { Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'About Me', href: '#about' },
  { label: 'My Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col items-center bg-dark px-6 py-10 text-center text-white max-lg:hidden">
      <div className="mb-6">
        <img
          src="https://picsum.photos/seed/photomuse-avatar/200/200"
          alt="Author avatar"
          className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
        />
        <h1 className="font-display text-xl font-bold tracking-wide">Louie Smith</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-brand-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto w-full">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
          Newsletter
        </h3>
        <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="email"
              placeholder="Enter Email Address"
              aria-label="Email address for newsletter"
              className="w-full rounded-l bg-white px-3 py-2 pl-9 text-sm text-body placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand-300"
            />
          </div>
          <button
            type="submit"
            aria-label="Subscribe"
            className="rounded-r bg-brand-300 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-400"
          >
            <Mail className="h-4 w-4" />
          </button>
        </form>
      </div>
    </aside>
  )
}
