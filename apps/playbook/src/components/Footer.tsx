const SOCIAL_LINKS = [
  { name: 'Facebook', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'Dribbble', url: '#' },
  { name: 'Instagram', url: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-footer-border bg-white px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Copyright */}
        <p className="text-sm text-secondary">
          &copy; {new Date().getFullYear()} Playbook. All rights reserved.
        </p>

        {/* Social links */}
        <ul className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                className="text-sm text-light-text transition-colors hover:text-brand"
                aria-label={link.name}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Component Dock */}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-secondary transition-colors hover:text-brand"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
