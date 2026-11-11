import { FOOTER } from '../data/site'

/**
 * The reference stops at the stats band with no footer at all; the port adds
 * one slim strip inside the shell so every template points back at the
 * marketplace. Same ground, same muted 13 px, one hairline — no new token.
 */
export function SiteFooter() {
  return (
    <footer className="vg-footer">
      <p>
        {FOOTER.prefix}{' '}
        <a className="vg-footer-link" href={FOOTER.href}>
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
