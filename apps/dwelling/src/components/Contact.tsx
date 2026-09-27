import { MapPin, Phone, Mail } from 'lucide-react'

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const socialIcons = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon]

interface ContactInfo {
  icon: React.ReactNode
  title: string
  lines: string[]
}

const contactItems: ContactInfo[] = [
  {
    icon: <MapPin size={24} />,
    title: 'Address',
    lines: ['160 Pennsylvania Ave NW', 'Washington, PA 16101'],
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone',
    lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: <Mail size={24} />,
    title: 'Support',
    lines: ['support@dwelling.com', 'info@dwelling.com'],
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">
              Get In Touch
            </h2>
            <h3 className="mt-2 font-heading text-3xl font-bold text-text-dark">Contact Us</h3>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Have a question or want to discuss a property? Reach out to our team and we will get
              back to you as soon as possible.
            </p>
            <div className="mt-8 space-y-6">
              {contactItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-text-dark">
                      {item.title}
                    </h4>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-text-muted">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h4 className="font-heading text-lg font-bold text-text-dark">Send a Message</h4>
            <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded border border-gray-200 bg-bg-light px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted/60 focus:border-brand focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded border border-gray-200 bg-bg-light px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted/60 focus:border-brand focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded border border-gray-200 bg-bg-light px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted/60 focus:border-brand focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full resize-none rounded border border-gray-200 bg-bg-light px-4 py-2.5 text-sm text-text-dark placeholder:text-text-muted/60 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="rounded bg-brand px-8 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
