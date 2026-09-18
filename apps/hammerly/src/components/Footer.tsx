const quickLinks = ['Home', 'Projects', 'Services', 'About', 'Blog', 'Contact'] as const

const contactInfo = [
  '2811 City Street, New York, NY 10001',
  '+1 (234) 567-8900',
  'info@hammerly.com',
] as const

export function Footer() {
  return (
    <footer className="bg-dark pt-12 pb-6 text-light">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold uppercase text-white">
              <span className="text-white">HAMMER</span>
              <span className="text-brand">LY</span>
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-light/70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic
              ipsum et veritatis corrupti.
            </p>
            <div className="flex gap-3">
              <a href="#" className="transition-colors hover:text-brand" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" className="transition-colors hover:text-brand" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" className="transition-colors hover:text-brand" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold uppercase text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-light/70 transition-colors hover:text-brand"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Twitter feed */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold uppercase text-white">Twitter</h4>
            <ul className="space-y-3">
              <li className="text-sm text-light/70">
                Construction update: Phase 2 is now complete! #building #progress
              </li>
              <li className="text-sm text-light/70">
                New project coming soon. Stay tuned for updates! #construction #new
              </li>
              <li className="text-sm text-light/70">
                Thank you to our amazing team for another successful quarter! #teamwork
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold uppercase text-white">
              Contact Info
            </h4>
            <ul className="space-y-2">
              {contactInfo.map((c) => (
                <li key={c} className="text-sm text-light/70">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-light/50">
            &copy; {new Date().getFullYear()} Hammerly. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
