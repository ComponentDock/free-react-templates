import { Search, User, ShoppingCart } from 'lucide-react'

export function Navbar() {
  return (
    <header className="bg-ink text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-brand transition-colors"
        >
          WARES
        </a>

        {/* Search */}
        <div className="hidden flex-1 mx-8 max-w-xl">
          <div className="flex">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 rounded-l bg-white px-4 py-2 text-sm text-ink focus:outline-none"
              aria-label="Search products"
            />
            <button
              className="rounded-r bg-brand px-4 text-white hover:bg-brand-dark transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Account & Cart */}
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-brand transition-colors" aria-label="My account">
            <User size={22} />
          </button>
          <button
            className="relative text-white hover:text-brand transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs font-bold">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
