import { contactEmail } from '../data'

export function Footer() {
  return (
    <footer className="bg-ink py-20 text-white/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <a href="#home" className="flex items-baseline gap-1 text-2xl font-semibold text-white">
              <span className="tracking-wide">Lo</span>
              <span className="tracking-wide text-brand">tus</span>
            </a>
            <p className="mt-5 max-w-sm leading-relaxed">
              A calm yoga and fitness studio for people who want to move well and live lighter.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">Contact Us</h2>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-4 inline-block text-white/70 underline-offset-4 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {contactEmail}
            </a>
            <p className="mt-6 leading-relaxed">
              © 2026 Lotus. All rights reserved. More templates at{' '}
              <a
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-brand underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Component Dock
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
