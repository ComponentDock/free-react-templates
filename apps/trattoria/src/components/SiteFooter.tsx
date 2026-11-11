import { FOOTER } from '../data/site'

/**
 * The marketplace line. The reference page ends at the hero; this footer sits
 * outside the 100vh shell so the hero's measurements still hold, on the same
 * ground so it reads as part of the screen.
 */
export function SiteFooter() {
  return (
    <footer className="tt-footer">
      <p>
        {FOOTER.prefix}{' '}
        <a className="tt-footer-link" href={FOOTER.href}>
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
