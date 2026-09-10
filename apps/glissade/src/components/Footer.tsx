import { Mail, Phone } from 'lucide-react'

const socials = [
  { label: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  {
    label: 'Twitter',
    icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    label: 'Dribbble',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
  },
  {
    label: 'Behance',
    icon: 'M7.5 11c1.38 0 2.5-1.12 2.5-2.5S8.88 6 7.5 6H3v5h4.5zM3 18h5c1.38 0 2.5-1.12 2.5-2.5S9.38 13 8 13H3v5zm12-9h5v-1h-5v1zm-3 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4h-2v4h-2V9z',
  },
] as const

export function Footer() {
  return (
    <footer className="bg-white transition-colors dark:bg-gray-950">
      {/* Widget area */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 text-center md:grid-cols-3">
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wide text-ink">Address</h6>
            <p className="mt-3 text-sm text-mist">
              56/8, panthapath, west
              <br />
              dhanmondi, kalabagan
            </p>
          </div>
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wide text-ink">
              Email Address
            </h6>
            <div className="mt-3 flex flex-col gap-1">
              <a
                href="mailto:info@glissade.com"
                className="flex items-center justify-center gap-2 text-sm text-mist transition-colors hover:text-brand-start"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                info@glissade.com
              </a>
              <a
                href="mailto:support@glissade.com"
                className="flex items-center justify-center gap-2 text-sm text-mist transition-colors hover:text-brand-start"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                support@glissade.com
              </a>
            </div>
          </div>
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wide text-ink">Phone Number</h6>
            <div className="mt-3 flex flex-col gap-1">
              <a
                href="tel:01245629823612"
                className="flex items-center justify-center gap-2 text-sm text-mist transition-colors hover:text-brand-start"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                012 4562 982 3612
              </a>
              <a
                href="tel:01263219564587"
                className="flex items-center justify-center gap-2 text-sm text-mist transition-colors hover:text-brand-start"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                012 6321 956 4587
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row">
          <a href="#home" className="text-lg font-semibold text-ink dark:text-white">
            Glissade<span className="text-brand-start">.</span>
          </a>
          <p className="text-center text-xs text-mist">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-start transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded border border-border text-mist transition-all hover:border-transparent hover:bg-gradient-to-b hover:from-brand-start hover:to-brand-end hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
