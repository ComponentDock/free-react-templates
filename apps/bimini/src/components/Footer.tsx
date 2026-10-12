import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME, TOP_TARGET } from '../lib/site'
import { footerClass, footerLinkClass, footerRowClass, footerTextClass } from '../lib/styles'

/**
 * The strip at the foot of the page: the app's own line next to a year computed as it renders, and
 * the one outbound credit it carries. The design stops at its hero — the page it ships holds nothing
 * else at all — so this strip and the line back to the top are the app's own addition.
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
          ·{' '}
          <a href={TOP_TARGET} className={footerLinkClass}>
            Back to the top
          </a>{' '}
          · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
