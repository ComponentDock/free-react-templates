export function Footer() {
  return (
    <footer className="bg-light-100 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#home" className="text-xl font-bold text-primary-600">
            Roost
          </a>
          <p className="max-w-sm text-sm text-gray-500">
            Real estate home services, recreated in React. Find your dream home with Roost.
          </p>
          <ul className="flex items-center gap-6 text-sm text-gray-500">
            <li>
              <a href="#services" className="hover:text-primary-600">
                Services
              </a>
            </li>
            <li>
              <a href="#listing" className="hover:text-primary-600">
                Listing
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary-600">
                About
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-primary-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary-600">
                Contact
              </a>
            </li>
          </ul>
          <div className="border-t border-gray-200 pt-6">
            <p className="text-xs text-gray-400">
              Made with{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
