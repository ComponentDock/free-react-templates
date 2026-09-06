const linkColumns = [
  {
    heading: 'Discover',
    links: [
      { label: 'Website editors', href: '#' },
      { label: 'Online retail', href: '#' },
      { label: 'Get started', href: '#' },
      { label: 'Services', href: '#' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Contact', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Team', href: '#' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Events', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Awards', href: '#' },
    ],
  },
  {
    heading: 'Buy',
    links: [
      { label: 'Where to Buy', href: '#' },
      { label: 'Shop Online', href: '#' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Knowledge Base', href: '#' },
    ],
  },
] as const

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  )
}

const socials = [
  { name: 'Twitter', href: '#', icon: TwitterIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
] as const

const appLinks = [
  { label: 'App Store', href: '#', icon: AppleIcon },
  { label: 'Google Store', href: '#', icon: PlayIcon },
] as const

export function Footer() {
  return (
    <footer
      className="bg-white px-4 py-28 font-['Poppins',sans-serif] text-[#777]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-5xl">
        {/* Five link columns — centered */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {linkColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-5 text-sm font-bold text-[#333]">{col.heading}</h3>
              <ul className="list-none space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#777] no-underline transition-colors duration-300 hover:text-[#4200ff]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-[#efefef]" />

        {/* Bottom bar: social icons | copyright | app store links */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Social icons — left */}
          <ul className="flex list-none">
            {socials.map((social, i) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className={`inline-block px-2.5 py-2.5 text-[#ccc] transition-colors duration-300 hover:text-[#4200ff] ${
                    i === 0 ? 'pl-0' : ''
                  }`}
                >
                  <social.icon />
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright — center */}
          <span className="text-sm text-[#777]">Subdivide &copy; All Rights Reserved.</span>

          {/* App store links — right */}
          <ul className="flex list-none">
            {appLinks.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-2.5 text-[13px] text-[#ccc] transition-colors duration-300 hover:text-[#4200ff] ${
                    i === appLinks.length - 1 ? 'pr-0' : ''
                  }`}
                >
                  <link.icon />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Component Dock attribution */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#777]">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[#4200ff] underline transition-colors hover:text-[#3300cc]"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
