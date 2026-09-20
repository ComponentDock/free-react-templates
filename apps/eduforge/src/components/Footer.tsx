import { Heart } from 'lucide-react'

const footerLinks = {
  'Quick Links': ['Home', 'About', 'Courses', 'Blog', 'Contact'],
  Resources: ['FAQ', 'Help Center', 'Community', 'Partners'],
  Contact: ['+1 (555) 234-5678', 'info@eduforge.edu', '123 Learning Ave'],
}

const socialLinks = [
  { name: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  {
    name: 'Twitter',
    path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    name: 'Instagram',
    path: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z',
  },
  {
    name: 'LinkedIn',
    path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z',
  },
]

export function Footer() {
  return (
    <footer className="bg-heading text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Eduforge</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering learners worldwide with high-quality online education and professional
              development resources.
            </p>
          </div>
          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-lg font-semibold mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-brand transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href="#"
              aria-label={s.name}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-brand" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} Eduforge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
