const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a
              href="#home"
              className="mb-4 inline-block text-2xl font-bold tracking-wide text-white"
            >
              Turbo<span className="text-primary-500">.</span>
            </a>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium
              magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-primary-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-sm transition-colors hover:text-primary-400"
              >
                Twitter
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-sm transition-colors hover:text-primary-400"
              >
                Facebook
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-sm transition-colors hover:text-primary-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-400 hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
