import { ArrowUp, Scale } from 'lucide-react'
import { FOOTER_BLURB, FOOTER_LINKS, FOOTER_YEAR } from '../data'

const FOOTER_ANCHORS: Record<(typeof FOOTER_LINKS)[number], string> = {
  Home: '#home',
  'Practice Area': '#practice',
  About: '#about',
  Blog: '#blog',
  Contact: '#contact',
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink text-footer-muted">
      <div className="mx-auto max-w-[1200px] px-4 pb-10 pt-16 text-center">
        <a href="#home" className="inline-flex items-center gap-2" aria-label="Juris home">
          <Scale className="h-7 w-7 text-brand" aria-hidden="true" />
          <span className="font-serif text-3xl font-medium tracking-wide text-white">Juris</span>
        </a>
        <p className="mx-auto mt-5 max-w-md text-base font-light leading-relaxed">{FOOTER_BLURB}</p>
        <nav aria-label="Footer navigation" className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={FOOTER_ANCHORS[label]}
                  className="text-[17px] transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-5 text-sm sm:flex-row">
          <p>Copyright © {FOOTER_YEAR} Juris. All rights reserved</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-accent"
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </footer>
  )
}
