import { Heart } from 'lucide-react'

const footerLinks = {
  'Quick Links': ['Home', 'About', 'Courses', 'Events', 'Blog'],
  Resources: ['FAQ', 'Help Center', 'Community', 'Partners'],
  Contact: ['+953 012 3654 896', 'info@precept.edu', '123 Education St'],
}

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Precept</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building better futures through quality education and accessible online learning.
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
        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
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
          <p>© {new Date().getFullYear()} Precept. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
