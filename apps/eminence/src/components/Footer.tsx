import { Send } from 'lucide-react'
import { useState } from 'react'

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    svg: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Twitter',
    href: '#',
    svg: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    label: 'Dribbble',
    href: '#',
    svg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.7-5.442.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z',
  },
  {
    label: 'Behance',
    href: '#',
    svg: 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z',
  },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="py-16 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-[var(--font-heebo)]">About Me</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A passionate creative professional dedicated to delivering exceptional design and
              development solutions. Let&apos;s create something amazing together.
            </p>
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Made with{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                Component Dock
              </a>
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-[var(--font-heebo)]">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">Stay updated with our latest trends</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 px-4 py-2 rounded-l-md bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-brand rounded-r-md hover:bg-brand-dark transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-[var(--font-heebo)]">Follow Me</h3>
            <p className="text-white/60 text-sm mb-4">Let us be social</p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d={svg} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
