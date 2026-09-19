export function TopBar() {
  return (
    <div className="bg-gray-100 text-xs text-gray-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        <p>Call Us: 012 44 5698 7456 896</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#login" className="transition-colors hover:text-brand-500">
              Login/Register
            </a>
          </li>
          <li>
            <a href="#account" className="transition-colors hover:text-brand-500">
              My Account
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-brand-500">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
