import { Mail, Phone, Send } from 'lucide-react'

/* Footer (source: .footer_area on #EFF1FF — subscription input-group,
   three widgets incl. the Contact Us form, and a copyright bar whose
   external attribution is replaced by the Component Dock link). */
const APP_HOME_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#feature' },
  { label: 'Price', href: '#price' },
  { label: 'Screenshot', href: '#screenshot' },
  { label: 'Download', href: '#' },
]

const SUPPORT_LINKS = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Help', href: '#' },
  { label: 'Offer', href: '#' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer id="contact" className="mt-[100px] bg-periwinkle">
      {/* Subscription band. */}
      <div className="px-[15px] py-[60px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">Subscription Now</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[14px] text-body">
          Subscribe to our newsletter and be the first to hear about new features and exclusive
          offers.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-[520px] items-stretch overflow-hidden rounded-[27.5px] bg-white shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-1 items-center gap-2 px-4">
            <Mail className="h-4 w-4 shrink-0 text-body" aria-hidden="true" />
            <input
              id="subscribe-email"
              type="email"
              placeholder="Enter Your E-Mail"
              className="w-full py-4 text-[14px] text-ink outline-none placeholder:text-body"
            />
          </div>
          <button
            type="submit"
            className="bg-[linear-gradient(to_right,#d6c3fc,#acc4fc,#98c5fc)] px-8 font-display text-[14px] font-semibold uppercase text-white"
          >
            Send
          </button>
        </form>
      </div>

      {/* Widgets. */}
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-10 px-[15px] pb-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-[18px] font-semibold text-ink">App Home</h3>
          <ul className="mt-5 space-y-2">
            {APP_HOME_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[14px] text-body hover:text-[#7c5cfc]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-[18px] font-semibold text-ink">Support</h3>
          <ul className="mt-5 space-y-2">
            {SUPPORT_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[14px] text-body hover:text-[#7c5cfc]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-[18px] font-semibold text-ink">Contact Us</h3>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Contact form"
          >
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your name"
              className="w-full rounded-[6px] border border-gray-200 bg-white px-4 py-3 text-[14px] text-ink outline-none placeholder:text-body"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              aria-label="Your phone"
              className="w-full rounded-[6px] border border-gray-200 bg-white px-4 py-3 text-[14px] text-ink outline-none placeholder:text-body"
            />
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your email"
              className="w-full rounded-[6px] border border-gray-200 bg-white px-4 py-3 text-[14px] text-ink outline-none placeholder:text-body"
            />
            <input
              type="text"
              placeholder="Your Subject"
              aria-label="Your subject"
              className="w-full rounded-[6px] border border-gray-200 bg-white px-4 py-3 text-[14px] text-ink outline-none placeholder:text-body"
            />
            <textarea
              placeholder="Your Message"
              aria-label="Your message"
              rows={4}
              className="w-full resize-none rounded-[6px] border border-gray-200 bg-white px-4 py-3 text-[14px] text-ink outline-none placeholder:text-body"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-[6px] bg-[linear-gradient(to_right,#d6c3fc,#acc4fc,#98c5fc)] py-3 font-display text-[14px] font-semibold uppercase text-white"
            >
              Send Now <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright bar — attribution replaced by the branded Component Dock
          link (monorepo footer mandate). */}
      <div className="border-t border-gray-200 px-[15px] py-6 text-center">
        <p className="text-[13px] text-body">
          © 2026 Ripply. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-[#7c5cfc] hover:underline"
          >
            Component Dock
          </a>
          .
        </p>
        <p className="mt-1 flex items-center justify-center gap-2 text-[13px] text-body">
          <Phone className="h-3.5 w-3.5" aria-hidden="true" /> +1 234 567 890 ·{' '}
          <Mail className="h-3.5 w-3.5" aria-hidden="true" /> hello@ripply.app
        </p>
      </div>
    </footer>
  )
}
