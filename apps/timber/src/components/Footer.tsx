export function Footer() {
  return (
    <footer className="bg-dark px-4 py-12 font-['Quicksand',sans-serif]" role="contentinfo">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Timber</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Creating inspiring interior spaces with passion and precision. Your vision, our
              craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About', 'Services', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-primary">Contact Info</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>123 Design Street, Creative City</li>
              <li>+1 234 567 890</li>
              <li>info@timberstudio.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Timber Studio. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary transition-colors hover:text-primary-dark"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
