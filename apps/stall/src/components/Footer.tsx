const quickLinks = ['Home', 'Products', 'About', 'Special', 'Blog', 'Contact']

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — About */}
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-3 text-sm text-gray-400">
              We are a trusted ecommerce store providing quality products and exceptional customer
              service since 1976.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="text-sm font-bold text-gray-400 hover:text-white"
              >
                f
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="text-sm font-bold text-gray-400 hover:text-white"
              >
                t
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="text-sm font-bold text-gray-400 hover:text-white"
              >
                in
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="text-sm font-bold text-gray-400 hover:text-white"
              >
                ig
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Featured Product */}
          <div>
            <h3 className="text-lg font-bold">Featured Product</h3>
            <div className="mt-3 flex gap-3">
              <img
                src="https://picsum.photos/seed/stall-footer-prod/80/80"
                alt="Featured product"
                className="h-20 w-20 object-cover"
                width={80}
                height={80}
              />
              <div>
                <p className="text-sm font-semibold">Classic Watch</p>
                <p className="text-xs text-gray-400 line-through">$299</p>
                <p className="text-sm font-bold text-brand">$199</p>
              </div>
            </div>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>123 Commerce Street</li>
              <li>New York, NY 10001</li>
              <li>+1 234 567 890</li>
              <li>info@stall.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Stall. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
