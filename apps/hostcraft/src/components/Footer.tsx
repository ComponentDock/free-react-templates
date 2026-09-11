import { Button } from '@free-react-templates/ui'

const usefulLinks = [
  'Cloud Hosting',
  'VPS Hosting',
  'Dedicated Servers',
  'Domain Names',
  'SSL Certificates',
]
const navLinks = ['Home', 'About', 'Services', 'Pricing', 'Blog', 'Contact']

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="bg-bg-footer text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="mb-2 text-3xl font-bold">Sign Up For Web Hosting Today!</h2>
          <p className="mb-6 text-lg text-white/70">
            Starting at <span className="font-bold text-white">$4.50/mo</span>
          </p>
          <Button className="rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
            Get started now
          </Button>
        </div>
      </div>

      {/* Footer columns */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand widget */}
        <div className="rounded bg-brand p-6">
          <h3 className="mb-4 text-lg font-bold">Hostcraft</h3>
          <p className="mb-4 text-sm text-white/80">
            Reliable web hosting solutions for businesses of all sizes.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/80 transition-colors hover:text-white"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/80 transition-colors hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/80 transition-colors hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Useful Links</h4>
          <ul className="space-y-2">
            {usefulLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigational */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Navigational</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Office */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Office</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>123 Hosting Street, Web City, WC 12345</li>
            <li>+1 (555) 123-4567</li>
            <li>info@hostcraft.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright + Component Dock */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        <p>
          &copy; {new Date().getFullYear()} Hostcraft. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline transition-colors hover:text-white/60"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
