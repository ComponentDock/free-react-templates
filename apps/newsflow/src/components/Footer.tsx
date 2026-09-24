const FOOTER_LINKS = [
  { label: 'About' },
  { label: 'Contact' },
  { label: 'Privacy Policy' },
  { label: 'Terms of Service' },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-lg font-black text-brand">Newsflow</p>
            <p className="mt-1 text-sm text-text-secondary">
              Your source for the latest viral stories and trending news.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href="#"
                className="text-sm text-text-secondary hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-text-muted">
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
