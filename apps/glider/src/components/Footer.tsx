import { MapPin, Mail, Phone } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-transparent">
      {/* Footer widget — 3-column info */}
      <div className="border-t border-white/20 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
          <div className="text-center">
            <MapPin size={24} className="mx-auto mb-4 text-white" />
            <p className="text-sm text-white/70">
              123 Creative Avenue
              <br />
              Design District, CA 90210
            </p>
          </div>
          <div className="text-center">
            <Mail size={24} className="mx-auto mb-4 text-white" />
            <p className="text-sm text-white/70">
              hello@gliderstudio.com
              <br />
              support@gliderstudio.com
            </p>
          </div>
          <div className="text-center">
            <Phone size={24} className="mx-auto mb-4 text-white" />
            <p className="text-sm text-white/70">
              +1 (555) 123-4567
              <br />
              +1 (555) 987-6543
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Glider Studio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/60 transition-colors hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/60 transition-colors hover:text-white"
            >
              <TwitterIcon />
            </a>
          </div>
          <p className="text-sm text-white/60">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
