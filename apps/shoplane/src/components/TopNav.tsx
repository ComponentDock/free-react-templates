export function TopNav() {
  return (
    <div className="bg-gray-900 text-xs text-gray-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="hidden sm:block">free shipping on all u.s orders over $50</div>
        <div className="flex items-center gap-4 sm:ml-auto">
          <button type="button" className="flex items-center gap-1 hover:text-white">
            usd
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button type="button" className="flex items-center gap-1 hover:text-white">
            English
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <a href="#account" className="hover:text-white">
            My Account
          </a>
        </div>
      </div>
    </div>
  )
}
