import { useState, type FormEvent } from 'react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About Author', href: '#about' },
  { label: 'Testimonials', href: '#testimonial' },
]

export function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <footer className="bg-dark-footer pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">About Us</h3>
            <p className="text-sm leading-relaxed text-muted">
              BookCraft brings authors and readers together. We celebrate the art of storytelling
              and the joy of discovering new books.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-link-footer transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Contact</h3>
            {submitted ? (
              <p role="status" className="text-sm text-green-400">
                Message sent! We&apos;ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  aria-label="Your name"
                  className="w-full rounded-full border border-white/30 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-blue-primary focus:outline-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  aria-label="Your email"
                  className="w-full rounded-full border border-white/30 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-blue-primary focus:outline-none"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  aria-label="Your message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-white/30 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-blue-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-blue-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social + copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <ul className="mb-4 flex justify-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-blue-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link-footer underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
