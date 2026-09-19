import { Search, ShoppingBag, Star, User } from 'lucide-react'

const navLinks = ['Home', 'Clothes', 'Accessories', 'Lingerie', 'Contact']

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-sans text-2xl font-bold text-white">
          Vow
        </a>
        <nav aria-label="Main navigation">
          <ul className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <form className="hidden lg:block" role="search">
            <div className="flex items-center">
              <input
                type="search"
                placeholder="Search..."
                aria-label="Search products"
                className="border-b border-white/30 bg-transparent px-2 py-1 text-sm text-white placeholder-white/50 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                className="ml-2 text-white/70 hover:text-white"
              >
                <Search size={18} />
              </button>
            </div>
          </form>
          <button aria-label="Shopping cart" className="relative text-white/70 hover:text-white">
            <ShoppingBag size={20} />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
              1
            </span>
          </button>
          <button aria-label="Wishlist" className="relative text-white/70 hover:text-white">
            <Star size={20} />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
              0
            </span>
          </button>
          <button aria-label="User account" className="text-white/70 hover:text-white">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
