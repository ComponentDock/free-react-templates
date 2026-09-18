const MENU_LINKS = ['Shop', 'About', 'Journal', 'Contact Us']
const HELP_LINKS = [
  'Shipping Information',
  'Returns & Exchange',
  'Terms & Conditions',
  'Privacy Policy',
  'FAQs',
]

export function Footer() {
  return (
    <footer className="bg-light-bg py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Warehaus</h3>
            <p className="text-sm leading-relaxed text-text-muted">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Menu</h4>
            <ul className="space-y-2">
              {MENU_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-text-muted transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Help</h4>
            <ul className="space-y-2">
              {HELP_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-text-muted transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Have a Questions?</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
              <li>+2 392 3929 210</li>
              <li>info@yourdomain.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Warehaus. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
