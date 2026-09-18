const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Hot Deals', href: '#hot-deal' },
  { label: 'Categories', href: '#categories' },
  { label: 'New Products', href: '#new-products' },
  { label: 'Lifestyle', href: '#' },
  { label: 'Featured', href: '#' },
]

export function Navigation() {
  return (
    <nav
      className="border-t-[3px] border-brand border-b-2 border-b-light-grey bg-white"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center px-4">
        <ul className="flex gap-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-body-text transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
