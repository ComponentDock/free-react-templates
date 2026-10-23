import { footerNav } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white pt-12 pb-8 text-center">
      <p className="text-xs text-footer-text">
        © {year} All rights reserved | This template is made with{' '}
        <span aria-label="love" className="text-brand">
          ♥
        </span>{' '}
        by Free Templates
      </p>
      <nav aria-label="Footer" className="mt-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerNav.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-xs text-footer-text transition-colors hover:text-brand hover:underline hover:decoration-brand hover:underline-offset-4"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mx-auto max-w-7xl px-4 pt-6 text-center text-xs opacity-70">
        More templates at{' '}
        <a href="https://www.componentdock.com/" className="underline underline-offset-4">
          Component Dock
        </a>
      </div>
    </footer>
  )
}
