import { Mail, Phone, Search } from 'lucide-react'

export function TopBar() {
  return (
    <div className="border-b border-border bg-white text-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-2 sm:px-6">
        {/* Left: contact info */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@learnpath.com"
            className="flex items-center gap-1 text-text-muted transition hover:text-brand"
          >
            <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
            <span>info@learnpath.com</span>
          </a>
          <span className="hidden text-border sm:inline">|</span>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-1 text-text-muted transition hover:text-brand"
          >
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            <span>+1 (555) 123-4567</span>
          </a>
        </div>

        {/* Right: search + auth links */}
        <div className="flex items-center gap-3">
          <form className="hidden items-center sm:flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search courses…"
              aria-label="Search courses"
              className="border border-r-0 border-border bg-bg-input px-3 py-1.5 text-sm text-text outline-none focus:border-brand"
            />
            <button
              type="submit"
              aria-label="Search"
              className="flex items-center justify-center border border-brand bg-brand px-3 py-1.5 text-white transition hover:bg-brand-hover"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
          <span className="hidden text-border sm:inline">|</span>
          <a href="#register" className="text-text-muted transition hover:text-brand">
            Register
          </a>
          <span className="text-border">|</span>
          <a href="#login" className="text-text-muted transition hover:text-brand">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}
