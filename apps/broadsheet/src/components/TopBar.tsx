import { Search } from 'lucide-react'

export function TopBar() {
  return (
    <div className="border-b border-gray-200 bg-white py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <a href="/" className="text-2xl font-bold text-text-heading">
          BroadSheet
        </a>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-sm text-text-meta sm:flex">
            <a href="#" className="hover:text-brand">
              Login
            </a>
            <a href="#" className="hover:text-brand">
              Register
            </a>
          </div>
          <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search"
              className="rounded-l border border-gray-300 px-3 py-1.5 text-sm focus:border-brand focus:outline-none"
              aria-label="Search"
            />
            <button
              type="submit"
              className="rounded-r bg-brand p-1.5 text-white hover:bg-brand-dark"
              aria-label="Submit search"
            >
              <Search size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
