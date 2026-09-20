import { Send } from 'lucide-react'

const stats = [
  { value: '5,000+', label: 'Attendees' },
  { value: '451', label: 'Speakers' },
  { value: '568', label: 'Sessions' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white dark:bg-ink-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-display text-lg font-bold uppercase tracking-wide">About Us</h4>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              We organize world-class digital conferences that bring together the brightest minds in
              design, technology, and creativity.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold uppercase tracking-wide">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Address: 123 Conference Ave, New York, NY</li>
              <li>
                <a href="tel:+888044338899" className="hover:text-brand">
                  Phone: +8880 44338899
                </a>
              </li>
              <li>
                <a href="mailto:info@confetti.com" className="hover:text-brand">
                  Email: info@confetti.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold uppercase tracking-wide">
              Important Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {['View Project', 'Contact Us', 'Testimonial', 'Properties', 'Support'].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-brand">
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold uppercase tracking-wide">Newsletter</h4>
            <p className="mt-4 text-sm text-white/70">
              Subscribe to get the latest updates and offers.
            </p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-l bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-brand"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-r bg-brand px-4 text-white hover:bg-brand-dark"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 sm:grid-cols-4">
          <div>
            <span className="font-display text-2xl font-bold text-brand">Confetti</span>
          </div>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="font-display text-2xl font-bold">{s.value}</span>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-ink-dark py-6 text-center text-sm text-white/50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-brand">&#9829;</span> at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:text-white"
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
