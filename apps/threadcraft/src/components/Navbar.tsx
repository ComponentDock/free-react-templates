import { Search, ShoppingCart } from 'lucide-react'

const navLinks = ['Home', 'Shop', 'Collection', "Men's", "Women's", "Kid's", 'Blog', 'Contact']

export function Navbar() {
  return (
    <nav className="bg-body-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-extrabold text-text-dark tracking-tight">
          Threadcraft
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-semibold text-text-body hover:text-brand transition-colors uppercase tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:text-brand transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:text-brand transition-colors relative" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-brand text-dark-deep text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
