const LINKS = ['home', 'about us', 'offers', 'news', 'contact']

export function CopyrightBar() {
  return (
    <div className="bg-trek-dark border-t border-white/10 py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white/40 text-xs">
          &copy; {new Date().getFullYear()} Trekcraft. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white/40 text-xs hover:text-trek-orange transition-colors capitalize"
            >
              {link}
            </a>
          ))}
        </div>
        <p className="text-white/40 text-xs">
          More templates at{' '}
          <a href="https://www.componentdock.com/" className="text-trek-orange hover:underline">
            Component Dock
          </a>
        </p>
      </div>
    </div>
  )
}
