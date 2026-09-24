export function TopBar() {
  return (
    <div className="bg-surface-alt border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm text-text-secondary">
        <span>Welcome to Newsflow.</span>
        <div className="flex items-center gap-4" aria-label="Social media links">
          <a href="#" aria-label="Google" className="hover:text-brand">
            G+
          </a>
          <a href="#" aria-label="Pinterest" className="hover:text-brand">
            P
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-brand">
            F
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-brand">
            T
          </a>
        </div>
      </div>
    </div>
  )
}
