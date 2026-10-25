import { ButtonLink } from '@free-react-templates/ui'
import { address, contact, footerColumns } from '../content'
import { Wordmark } from './Wordmark'

const socials = [
  {
    label: 'Twitter',
    path: 'M21 5.6c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3 4.6a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8.1 8.1 0 0 1 2 18.1a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.1z',
  },
  {
    label: 'Instagram',
    path: 'M12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zM17.9 7.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 4.7c2.4 0 2.7 0 3.6.1 2.4.1 3.5 1.2 3.6 3.6 0 .9.1 1.2.1 3.6s0 2.7-.1 3.6c-.1 2.4-1.2 3.5-3.6 3.6-.9 0-1.2.1-3.6.1s-2.7 0-3.6-.1c-2.4-.1-3.5-1.2-3.6-3.6 0-.9-.1-1.2-.1-3.6s0-2.7.1-3.6c.1-2.4 1.2-3.5 3.6-3.6.9-.1 1.2-.1 3.6-.1zm0-1.6c-2.4 0-2.8 0-3.7.1-3.3.1-5 1.9-5.2 5.2 0 .9-.1 1.3-.1 3.7s0 2.8.1 3.7c.1 3.3 1.9 5 5.2 5.2.9 0 1.3.1 3.7.1s2.8 0 3.7-.1c3.3-.2 5-1.9 5.2-5.2 0-.9.1-1.3.1-3.7s0-2.8-.1-3.7c-.2-3.3-1.9-5-5.2-5.2-.9 0-1.3-.1-3.7-.1z',
  },
  {
    label: 'LinkedIn',
    path: 'M6.9 8.8H3.6v11.4h3.3V8.8zM5.2 3.3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zm6.1 5.5H8.1v11.4h3.3v-6c0-1.6.3-3.1 2.2-3.1s1.9 1.8 1.9 3.2v5.9h3.3v-6.6c0-2.9-.6-5.1-4-5.1-1.6 0-2.7.9-3.1 1.7h-.1V8.8z',
  },
]

/** Graphite footer: brand, three link columns, the trade block, then the bar. */
export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              Plumbing supply and fixture showroom in Sacramento. Trade accounts, next-day
              collection and a catalogue you can get priced properly.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <address className="mt-6 space-y-1 text-sm text-gray-400 not-italic">
              <p>{address[1]}</p>
              <p>
                {address[2]}
                <span className="sr-only">, Brassworks Supply Co.</span>
              </p>
              <p>
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </p>
            </address>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {footerColumns.map((column) => (
              <div key={column.head}>
                <h2 className="text-sm font-semibold tracking-wider text-white uppercase">
                  {column.head}
                </h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold tracking-wider text-white uppercase">
              Trade accounts
            </h2>
            <p className="mt-4 text-gray-400">
              Trade pricing, 30-day terms and next-day collection on stocked lines. Apply in about
              ten minutes.
            </p>
            <div className="mt-4">
              <ButtonLink href="#contact">Open a trade account</ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-gray-800 py-8 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Brassworks Supply Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-white">
              Terms of Service
            </a>
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-gray-400 hover:text-white"
            >
              More templates at Component Dock
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
