import { FOOTER } from '../data/site'

/**
 * The marketplace line. The reference page ends at the hero; this footer sits
 * outside the 100vh shell so the hero's measurements still hold, and it keeps
 * the page's own blue ground so it reads as part of the screen.
 */
export function SiteFooter() {
  return (
    <footer className="sp-footer">
      <p>
        {FOOTER.prefix}{' '}
        <a className="sp-footer-link" href={FOOTER.href}>
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
