import { Camera, ExternalLink } from 'lucide-react'
import { socialLinks } from './social-icons'

const footerLinks = {
  Services: ['Wedding', 'Portrait', 'Photography'],
  Resources: ['Portfolio', 'Blog', 'Tutorials'],
  'Quick Links': ['About', 'Contact', 'FAQ'],
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 text-xl font-bold text-black mb-3">
              <Camera className="w-5 h-5 text-gold-400" />
              Optic
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              Professional photography services for weddings, events, and portraits.
            </p>
            <p className="text-gray-500 text-sm">
              203 Fake St. Mountain View,
              <br />
              San Francisco, California, USA
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-gray-900 mb-3">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-gold-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gold-400 flex items-center justify-center text-gray-600 hover:text-white transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 border-t pt-6">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-gold-400 hover:underline inline-flex items-center gap-1"
            >
              Component Dock
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
