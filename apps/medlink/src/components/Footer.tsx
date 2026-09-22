import { Mail, Phone, MapPin, Send } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Features', 'Doctors', 'Departments', 'Blog', 'Contact']

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between">
          <h3 className="text-lg font-semibold">Subscribe to Our Newsletter</h3>
          <form className="flex w-full max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded px-4 py-2.5 text-sm text-[#333333]"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded bg-[#76b900] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#5a8f00] transition-colors"
            >
              Subscribe <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-xl font-bold">
            <svg
              className="h-7 w-7 text-[#76b900]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            MedLink
          </div>
          <p className="text-sm text-white/70">
            Providing quality healthcare services for individuals and families with compassion and
            professionalism.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-white/70 hover:text-[#76b900] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Departments</h4>
          <ul className="space-y-2">
            {[
              'Cardiology',
              'Neurology',
              'Ophthalmology',
              'Orthopedics',
              'General',
              'Pediatrics',
            ].map((dept) => (
              <li key={dept}>
                <a
                  href="#departments"
                  className="text-sm text-white/70 hover:text-[#76b900] transition-colors"
                >
                  {dept}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#76b900]" aria-hidden="true" />
              <span>123 Medical Drive, Health City, HC 10001</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 flex-shrink-0 text-[#76b900]" aria-hidden="true" />
              <a href="tel:+9530123654896" className="hover:text-[#76b900] transition-colors">
                +953 012 3654 896
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 flex-shrink-0 text-[#76b900]" aria-hidden="true" />
              <a
                href="mailto:support@medlink.com"
                className="hover:text-[#76b900] transition-colors"
              >
                support@medlink.com
              </a>
            </li>
          </ul>
          {/* Social icons */}
          <div className="mt-4 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#76b900] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} MedLink. All rights reserved.</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline hover:text-[#76b900] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
