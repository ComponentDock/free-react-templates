import { Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Courses', 'Blog', 'Contact']
const courseLinks = ['Web Development', 'Data Science', 'Digital Marketing', 'Mobile Development']

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.1 31.1 0 000 12a31.1 31.1 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.1 31.1 0 0024 12a31.1 31.1 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  )
}

const socials = [
  { label: 'Facebook', href: '#facebook', Icon: FacebookIcon },
  { label: 'Twitter', href: '#twitter', Icon: TwitterIcon },
  { label: 'Instagram', href: '#instagram', Icon: InstagramIcon },
  { label: 'Youtube', href: '#youtube', Icon: YoutubeIcon },
]

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold">
              <span className="text-white">Learn</span>
              <span className="text-brand">Path</span>
            </a>
            <p className="mt-3 text-sm text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              &copy; {new Date().getFullYear()} LearnPath. All rights reserved.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" /> info@learnpath.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" /> +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand" />
                <span>123 Learning Street, Education City, EC 12345</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-2">
                {quickLinks.slice(0, 3).map((link) => (
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
              <ul className="space-y-2">
                {quickLinks.slice(3).map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                {courseLinks.slice(0, 2).map((c) => (
                  <li key={c}>
                    <a href="#courses" className="text-sm text-gray-400 hover:text-white">
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Follow Us</h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center bg-white/10 text-gray-400 transition hover:bg-brand hover:text-white"
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6">
          <p className="text-sm text-gray-400">
            Made with{' '}
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
