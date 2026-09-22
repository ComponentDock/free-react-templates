import { Send, Heart } from 'lucide-react'

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

function DribbbleIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}

const quickLinks1 = ['Sitemaps', 'Categories', 'Archives', 'Advertise', 'Ad Choice']
const quickLinks2 = ['Privacy Policy', 'Terms of Use', 'Help Center', 'Newsletters', 'Feedback']

const instaImages = [
  'grandeur-inst1',
  'grandeur-inst2',
  'grandeur-inst3',
  'grandeur-inst4',
  'grandeur-inst5',
  'grandeur-inst6',
  'grandeur-inst7',
  'grandeur-inst8',
]

export function Footer() {
  return (
    <footer id="footer" className="bg-ink pt-16 pb-6 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h6 className="mb-4 font-heading text-lg font-semibold">About Grandeur</h6>
            <p className="text-sm leading-relaxed text-white/70">
              The world has become so fast-paced that people value experiences over information. We
              craft stays that speak for themselves.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="mb-4 font-heading text-lg font-semibold">Quick Links</h6>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-2">
                {quickLinks1.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {quickLinks2.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="mb-4 font-heading text-lg font-semibold">Newsletter</h6>
            <p className="mb-4 text-sm text-white/70">
              For business professionals caught between high OEM prices and mediocre print.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email"
                aria-label="Newsletter email"
                className="flex-1 rounded-l bg-white/10 px-3 py-2 text-sm text-white placeholder-white/40 outline-none"
              />
              <button
                type="submit"
                className="rounded-r bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-hover"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Instagram */}
          <div>
            <h6 className="mb-4 font-heading text-lg font-semibold">Instagram</h6>
            <div className="grid grid-cols-4 gap-1">
              {instaImages.map((img) => (
                <a key={img} href="#" className="block overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${img}/100/100`}
                    alt="Instagram post"
                    className="h-full w-full object-cover transition-opacity hover:opacity-75"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="flex items-center gap-1 text-xs text-white/50">
            &copy; {new Date().getFullYear()} Made with{' '}
            <Heart className="inline h-3 w-3 text-brand" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline transition-colors hover:text-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/50 transition-colors hover:text-brand"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/50 transition-colors hover:text-brand"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              className="text-white/50 transition-colors hover:text-brand"
            >
              <DribbbleIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
