import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'
import { footerClass, footerLinkClass, footerRowClass, footerTextClass } from '../lib/styles'

/**
 * The closing strip at the foot of the content column: the page's own line next to a year computed
 * as it renders, and the single outbound credit on the page. The design stops at its band, so this
 * strip is the app shell's own addition. It sits inside the content column, so it carries no
 * container of its own.
 */
export function Footer() {
  return (
    <footer className={footerClass} data-testid="footer">
      <div className={footerRowClass}>
        <p className={footerTextClass}>
          {SITE_NAME} — {FOOTER_NOTE}
        </p>
        <p className={footerTextClass}>
          More templates at{' '}
          <a href={DOCK_URL} target="_blank" rel="noreferrer" className={footerLinkClass}>
            {DOCK_LABEL}
          </a>{' '}
          · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
