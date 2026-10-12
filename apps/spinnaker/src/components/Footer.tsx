import { cn } from '@free-react-templates/ui'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'
import {
  containerClass,
  footerClass,
  footerLinkClass,
  footerRowClass,
  footerTextClass,
} from '../lib/styles'

/**
 * The closing band below the last block: a strip under a hairline carrying the page's own line and
 * its single outbound credit, next to a year computed as it renders. The design stops at its bar,
 * so this band is the app shell's own addition, and the credit is the only link on the page that
 * leaves it.
 */
export function Footer() {
  return (
    <footer className={footerClass} data-testid="footer">
      <div className={cn(containerClass, footerRowClass)}>
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
