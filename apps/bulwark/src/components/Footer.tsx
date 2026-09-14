import { Send } from 'lucide-react'

function FbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function DrIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-footer-bg py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-3">
        {/* About */}
        <div>
          <h4 className="mb-6 text-lg font-semibold text-white">About Us</h4>
          <p className="mb-4 text-sm leading-relaxed text-white/60">
            Bulwark is a leading provider of comprehensive cybersecurity solutions, protecting
            businesses of all sizes from evolving digital threats.
          </p>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Bulwark Security. All rights reserved.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="mb-6 text-lg font-semibold text-white">Newsletter</h4>
          <p className="mb-4 text-sm text-white/60">
            Subscribe to our newsletter for the latest security updates and tips.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email for newsletter"
              className="flex-1 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-brand px-5 py-3 text-white transition hover:bg-brand/80"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="mb-6 text-lg font-semibold text-white">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-white/60 transition hover:text-brand">
              <FbIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/60 transition hover:text-brand">
              <TwIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Dribbble" className="text-white/60 transition hover:text-brand">
              <DrIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Component Dock link */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 underline transition hover:text-brand"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
