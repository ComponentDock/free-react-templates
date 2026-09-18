import { ArrowUp } from 'lucide-react'

const FOOTER_LINKS = ['Home', 'About', 'Services', 'Works', 'Contact']

export function Footer() {
  return (
    <footer className="bg-surface-darker py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="font-display text-2xl font-bold text-text-light">
            Lumen
          </a>
          <ul className="flex flex-wrap justify-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-display text-xs font-medium uppercase tracking-wider text-text-gray transition-colors hover:text-primary-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-sans text-xs text-text-gray">
            &copy; {new Date().getFullYear()} Lumen. All rights reserved.
          </p>
          <p className="font-sans text-xs text-text-gray">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 transition-colors hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>
        </div>

        <a
          href="#home"
          className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-text-light shadow-lg transition-colors hover:bg-primary-500"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  )
}
