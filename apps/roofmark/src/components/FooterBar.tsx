export function FooterBar() {
  const links = ['Home', 'About us', 'Listings', 'News', 'Contact']

  return (
    <div className="bg-brand-deep text-brand-light-muted text-sm">
      <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Roofmark. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-brand-green transition-colors">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
