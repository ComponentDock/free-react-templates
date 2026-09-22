import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/goquest-footer/1920/800)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-dark/90" />

      <div className="relative z-10">
        {/* Main footer */}
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Logo & About */}
            <div>
              <a href="#home" className="flex items-center gap-1 mb-4">
                <span className="font-heading text-3xl font-bold text-white">
                  Go<span className="text-accent-red">Quest</span>
                </span>
              </a>
              <p className="text-footer-text text-sm leading-relaxed mb-6">
                GoQuest is a world-leading online tour booking platform. We provide exceptional
                travel experiences with expert local guides.
              </p>
              <div className="space-y-3 text-footer-text text-sm">
                <p className="flex items-center gap-2">
                  <Mail size={14} /> info@goquest.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={14} /> +1 (234) 567 890
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} /> 123 Avenue, New York
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-heading text-white text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Packages', 'Blog', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                      className="text-accent-warm-alt hover:text-accent-yellow transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: New Products */}
            <div>
              <h4 className="font-heading text-white text-xl font-semibold mb-4">New Products</h4>
              <ul className="space-y-2">
                {[
                  'Greek Islands Tour',
                  'Swiss Alps Adventure',
                  'Tokyo Cultural Journey',
                  'Bali Beach Retreat',
                  'Patagonia Trek',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#package"
                      className="text-accent-warm-alt hover:text-accent-yellow transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Support */}
            <div>
              <h4 className="font-heading text-white text-xl font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {[
                  'FAQ',
                  'Privacy Policy',
                  'Terms of Service',
                  'Cancellation Policy',
                  'Help Center',
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                      className="text-accent-warm-alt hover:text-accent-yellow transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-footer-text text-sm">
              &copy; 2025 GoQuest. All rights reserved. Powered by{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-warm-alt hover:text-accent-yellow transition-colors"
              >
                Component Dock
              </a>
            </p>
            <div className="flex items-center gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  aria-label={social}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-footer-text hover:bg-accent-yellow hover:text-navy-dark transition-colors text-sm"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
