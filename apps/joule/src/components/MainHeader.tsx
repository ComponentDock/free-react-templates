import { Search, ShoppingCart, Heart } from 'lucide-react'

export function MainHeader() {
  return (
    <div className="bg-dark-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          <span className="text-brand">Joule</span>
        </a>

        {/* Search form */}
        <div className="hidden flex-1 items-center gap-0 md:flex">
          <select
            className="rounded-l-[40px] border border-r-0 border-gray-600 bg-dark-bg px-4 py-2 text-sm text-gray-400 focus:outline-none"
            aria-label="Category"
          >
            <option>All Categories</option>
            <option>Laptops</option>
            <option>Smartphones</option>
            <option>Cameras</option>
            <option>Accessories</option>
          </select>
          <input
            type="text"
            placeholder="Search here"
            className="border-y border-gray-600 bg-dark-bg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            type="button"
            className="rounded-r-[40px] bg-brand px-6 py-2 text-sm font-semibold text-white hover:bg-brand-secondary"
          >
            <Search className="inline h-4 w-4" />
            <span className="ml-1">Search</span>
          </button>
        </div>

        {/* Cart + Wishlist */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative text-white hover:text-brand"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button type="button" className="relative text-white hover:text-brand" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
              3
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
