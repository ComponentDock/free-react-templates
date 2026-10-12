import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'

/**
 * The closing strip below the band: a dark surface with a hairline top edge, the
 * wordmark line and the page's single outbound credit, next to a year computed at
 * render. The reference has no footer at all — this is the app shell's addition.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-shell">
      <div className="mx-auto flex w-full flex-col gap-2 px-[15px] py-6 sm:max-w-[540px] sm:flex-row sm:items-center sm:justify-between md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <p className="text-[14px] text-white/70">
          {SITE_NAME} — {FOOTER_NOTE}
        </p>
        <p className="text-[14px] text-white/70">
          More templates at{' '}
          <a
            href={DOCK_URL}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand underline transition-colors duration-300 hover:text-brand-shade focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {DOCK_LABEL}
          </a>{' '}
          · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
