import { Search, Heart, ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <div className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-bold text-ink">
          Tech<span className="text-primary-400">Vault</span>
        </a>

        {/* Search */}
        <div className="flex flex-1 max-w-xl mx-8">
          <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <select className="h-12 rounded-l-md border border-r-0 border-gray-200 bg-gray-50 px-3 text-sm text-smoke focus:outline-none">
                <option>All Categories</option>
                <option>Computers</option>
                <option>Laptops</option>
                <option>Cameras</option>
                <option>Smartphones</option>
              </select>
              <input
                type="search"
                placeholder="Search for products..."
                className="h-12 flex-1 border border-gray-200 px-4 text-sm focus:border-primary-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="h-12 rounded-r-md bg-primary-400 px-6 text-white hover:bg-primary-500 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Wishlist & Cart */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-ink" />
            <div>
              <div className="text-xs text-smoke">Wishlist</div>
              <div className="text-sm font-semibold text-ink">115</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-ink" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-400 text-[10px] text-white">
                10
              </span>
            </div>
            <div>
              <div className="text-xs text-smoke">Cart</div>
              <div className="text-sm font-semibold text-ink">$85</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
