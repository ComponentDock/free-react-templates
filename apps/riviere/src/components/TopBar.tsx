import { Globe, Phone } from 'lucide-react'

const utilityLinks = [
  { label: 'My Account', href: '#account' },
  { label: 'Wish List', href: '#wishlist' },
  { label: 'Shopping', href: '#shopping' },
  { label: 'Cart', href: '#cart' },
  { label: 'Checkout', href: '#checkout' },
]

export function TopBar() {
  return (
    <div className="hidden border-b border-gray-200 bg-white text-xs text-meta dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            <span>EN</span>
          </span>
          <span className="flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>+1 (555) 123-4567</span>
          </span>
        </div>
        <nav aria-label="Utility links">
          <ul className="flex items-center gap-3">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
