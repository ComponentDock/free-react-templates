import { TwitterIcon, BehanceIcon, DribbbleIcon, FacebookIcon } from './social-icons'

const socials = [
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Behance', href: 'https://behance.net', Icon: BehanceIcon },
  { label: 'Dribbble', href: 'https://dribbble.com', Icon: DribbbleIcon },
  { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="#home"
            className="text-xl font-bold uppercase tracking-widest text-green-title"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Pixelcraft
          </a>
          <p className="max-w-sm text-sm text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
            Creative digital agency, recreated in React. Bold design, fast pages.
          </p>
          <ul className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-green-title"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
