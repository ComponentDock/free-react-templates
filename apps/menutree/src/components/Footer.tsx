import { FOOTER_NOTE, SITE_NAME } from '../lib/site'

/**
 * The app shell's strip below the band: the same slate surface, closed off by a
 * translucent hairline, holding the wordmark and the year computed at render next
 * to a single Component Dock credit.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" aria-label="Site footer" className="border-t border-white/10 bg-band">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-3 px-[15px] py-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#home"
          className="text-[18px] font-bold text-white transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {SITE_NAME}
          <span className="text-brand">.</span>
        </a>

        <p className="text-[14px] text-white/70">
          © {year} {SITE_NAME} — {FOOTER_NOTE} More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white underline transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Component Dock
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
