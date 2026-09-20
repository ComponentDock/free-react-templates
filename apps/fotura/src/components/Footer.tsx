const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Twitter',
    href: '#',
    icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: 'M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm-4 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3.5-6.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z',
  },
  {
    label: 'Vimeo',
    href: '#',
    icon: 'M22.8 8.5c-.1 2-1.5 4.8-4.2 8.3C15.8 20.3 13.3 22 11.2 22c-1.3 0-2.4-1.2-3.3-3.5L5.8 11c-.6-2.3-1.2-3.5-1.9-3.5-.1 0-.7.3-1.6.9L1.3 6.7c1-.9 2-1.8 3-2.7 1.4-1.2 2.4-1.8 3.1-1.9 1.6-.1 2.5.9 2.9 3.2.4 2.5.6 4 .8 4.5.5 2.2 1 3.3 1.7 3.3.5 0 1.3-.8 2.3-2.4.9-1.5 1.4-2.6 1.5-3.3.1-1.1-.3-1.7-1.4-1.7-.5 0-1 .1-1.6.3 1.1-3.5 3.1-5.2 6.1-5.1 2.2.1 3.2 1.5 3 3.5z',
  },
  {
    label: 'Pinterest',
    href: '#',
    icon: 'M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.9 6.3 9.3-.1-.8-.2-2.1 0-3 .2-.9 1.1-4.7 1.1-4.7s-.3-.6-.3-1.4c0-1.3.8-2.3 1.8-2.3.8 0 1.2.6 1.2 1.4 0 .8-.5 2.1-.8 3.2-.2.9.5 1.7 1.4 1.7 1.7 0 3-1.8 3-4.4 0-2.3-1.7-3.9-4-3.9-2.7 0-4.3 2-4.3 4.2 0 .8.3 1.7.7 2.2.1.1.1.2.1.3-.1.3-.2.9-.2 1 0 .1-.1.2-.3.1-1.2-.5-1.9-2.2-1.9-3.5 0-2.9 2.1-5.5 6-5.5 3.2 0 5.6 2.2 5.6 5.2 0 3.1-2 5.6-4.7 5.6-.9 0-1.8-.5-2.1-1.1l-.6 2.2c-.2.8-.8 1.8-1.2 2.4.9.3 1.8.4 2.8.4 5.5 0 10-4.5 10-10S17.5 2 12 2z',
  },
]

export function Footer() {
  return (
    <footer className="absolute bottom-0 right-0 left-0 z-50 text-center">
      {/* Copyright */}
      <p className="absolute left-[50px] h-[60px] leading-[60px] text-[15px] text-white/80">
        &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
        <span className="text-brand">&hearts;</span> by{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-brand"
        >
          Component Dock
        </a>
      </p>

      {/* Show Thumbnails button */}
      <a
        href="#thumbnails"
        className="relative mx-auto inline-block h-[30px] leading-[30px] px-5 text-[13px] font-semibold uppercase tracking-wider text-white/80 transition-colors hover:text-white"
      >
        <span className="relative z-10">SHOW THUMBNAILS</span>
        <span className="absolute right-[-2px] bottom-[3px] left-[-2px] top-[3px] -z-10 bg-light transition-transform hover:origin-bottom hover:scale-y-100" />
      </a>

      {/* Social icons */}
      <ul className="absolute right-[50px] top-0 flex list-none items-center gap-0 p-0">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="flex h-[60px] w-[60px] items-center justify-center text-white/60 transition-colors hover:text-brand"
              aria-label={link.label}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path d={link.icon} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
