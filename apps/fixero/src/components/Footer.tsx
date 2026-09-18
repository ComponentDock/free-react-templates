export function Footer() {
  const quickLinks = ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us']

  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="lg:w-1/4">
            <h3 className="mb-4 text-lg font-bold">About Us</h3>
            <p className="text-sm text-gray-400">
              Fixero provides professional handyman and construction services. From renovations to
              new builds, we deliver quality craftsmanship you can trust.
            </p>
          </div>
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, colIdx) => (
                <div key={colIdx}>
                  <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
                  <ul className="space-y-2">
                    {quickLinks.map((link) => (
                      <li key={`${colIdx}-${link}`}>
                        <a
                          href="#"
                          className="text-sm text-gray-400 transition-colors hover:text-white"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Fixero. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-orange-400"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
