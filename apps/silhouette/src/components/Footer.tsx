export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <a href="/" className="mb-4 inline-block text-2xl font-bold font-serif text-white">
            Silhouette<span className="text-brand">.</span>
          </a>
          <p className="text-sm leading-relaxed">
            Curated fashion for the modern wardrobe. Quality, comfort, and timeless elegance in
            every piece.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#collections" className="hover:text-white transition-colors">
                Collections
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>123 Fashion Ave, New York, NY</li>
            <li>hello@silhouette.style</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs sm:flex-row">
          <p>&copy; {year} Silhouette. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
