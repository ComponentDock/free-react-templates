import { ChevronDown, ChevronRight, Menu } from 'lucide-react'

const CATEGORIES = [
  'Computers & Laptops',
  'Cameras & Photos',
  'Hardware',
  'Smartphones & Tablets',
  'TV & Audio',
  'Gadgets',
  'Car Electronics',
  'Video Games & Consoles',
  'Accessories',
]

const MAIN_NAV = [
  { label: 'Home', href: '#' },
  { label: 'Super Deals', href: '#', hasSub: true },
  { label: 'Featured Brands', href: '#', hasSub: true },
  { label: 'Pages', href: '#', hasSub: true },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export function MainNav() {
  return (
    <nav className="bg-ink text-white" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center px-4">
        {/* Categories */}
        <div className="group relative">
          <button className="flex items-center gap-2 bg-primary-400 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide hover:bg-primary-500 transition-colors">
            <Menu className="h-4 w-4" />
            Categories
          </button>
          <ul className="absolute left-0 top-full z-50 hidden w-64 bg-white py-2 shadow-lg group-hover:block">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="flex items-center justify-between px-5 py-2 text-sm text-ash hover:bg-gray-50 hover:text-primary-400 transition-colors"
                >
                  {cat}
                  <ChevronRight className="h-3 w-3 text-smoke" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Nav */}
        <ul className="ml-8 flex items-center gap-1">
          {MAIN_NAV.map((item) => (
            <li key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 px-4 py-3 font-display text-sm font-medium uppercase tracking-wide hover:text-primary-400 transition-colors"
              >
                {item.label}
                {item.hasSub && <ChevronDown className="h-3 w-3" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
