const NAV_LINKS = ['Home', 'Shop', 'Product', 'Cart', 'Checkout']

export function Footer() {
  return (
    <footer className="bg-footer-bg px-8 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
        {/* Logo + copyright */}
        <div className="text-center md:text-left">
          <a href="/" className="mb-4 inline-block text-2xl font-bold text-white">
            Stockroom
          </a>
          <p className="text-sm text-footer-text">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">&#9829;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
        {/* Nav links */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 md:justify-end">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm transition-colors hover:text-brand ${i === 0 ? 'text-brand' : 'text-footer-text'}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
