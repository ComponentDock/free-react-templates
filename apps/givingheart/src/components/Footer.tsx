import { Mail, Phone, ArrowUp } from 'lucide-react'

/* Brand icons — lucide-react removed brand icons, so we use inline SVGs. */
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.29zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
    </svg>
  )
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.93.25H0v-14.4h6.938zm-.71 5.93c.558 0 1.02-.15 1.397-.444.378-.293.57-.74.57-1.34 0-.347-.06-.63-.19-.845-.13-.215-.3-.386-.52-.51-.22-.124-.47-.21-.75-.26-.28-.05-.56-.07-.84-.07H3.51v3.47h2.718zm.18 6.31c.32 0 .63-.03.93-.09.3-.06.56-.16.8-.3.23-.14.42-.33.56-.56.14-.23.21-.53.21-.89 0-.7-.21-1.2-.64-1.49-.43-.29-.97-.44-1.65-.44H3.51v3.37h2.908zM15.834 4.503h6.656v1.77h-6.656V4.503zM21.99 12.23c-.19-.66-.47-1.22-.84-1.69-.37-.46-.82-.83-1.35-1.09-.53-.26-1.13-.39-1.81-.39-.68 0-1.28.14-1.81.42-.53.28-.98.65-1.36 1.12-.38.47-.67 1.02-.88 1.66-.21.64-.31 1.32-.31 2.05 0 .72.11 1.4.33 2.03.22.64.53 1.19.92 1.66.39.47.87.84 1.43 1.1.56.26 1.2.39 1.9.39 1.04 0 1.9-.33 2.58-1 .68-.67 1.1-1.59 1.26-2.77h-2.53c-.08.37-.27.68-.56.94-.29.26-.65.39-1.08.39-.53 0-.95-.15-1.27-.45-.32-.3-.53-.76-.62-1.39h7.04c.03-.36.04-.68.04-.97 0-.74-.12-1.44-.36-2.09zm-6.95 1.58c.06-.4.19-.75.4-1.06.21-.3.49-.54.85-.72.36-.18.76-.27 1.22-.27.46 0 .86.09 1.22.27.36.18.64.42.85.72.21.31.34.66.4 1.06h-4.94z" />
    </svg>
  )
}

const socialLinks = [
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: DribbbleIcon, href: '#', label: 'Dribbble' },
  { icon: BehanceIcon, href: '#', label: 'Behance' },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Donate', href: '#donate' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition hover:bg-primary hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@givingheart.org" className="hover:text-white transition">
                  info@givingheart.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 234 567 890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GivingHeart. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary hover:text-primary-600 transition"
            >
              Component Dock
            </a>
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
