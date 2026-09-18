import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Product: ['Mechbot Alpha', 'Mechbot Pro', 'Mechbot Rover', 'Accessories'],
  Resources: ['Documentation', 'API Reference', 'Community Forum', 'Tutorials'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Contact'],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-heading text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tight">
              Mech<span className="text-brand">bot</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              Building the future of accessible robotics for makers, educators, and engineers
              worldwide.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" /> hello@mechbot.io
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" /> +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" /> San Francisco, CA
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${heading.toLowerCase()}`}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Mechbot. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand/80"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
