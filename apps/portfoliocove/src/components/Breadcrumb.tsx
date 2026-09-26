/**
 * Breadcrumb navigation showing current location.
 * "Home" is a link; "Portfolio" is plain text (current page).
 */
export function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-400">
      <ol className="flex items-center gap-2">
        <li>
          <a href="/" className="transition-colors hover:text-gray-600">
            Home
          </a>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <span className="text-gray-600">Portfolio</span>
        </li>
      </ol>
    </nav>
  )
}
