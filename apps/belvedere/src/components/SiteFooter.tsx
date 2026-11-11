import { FOOTER } from '../data/site'

/**
 * The reference ends at the meta band with no footer at all; the port adds one
 * slim line so every template points back at the marketplace. Same ground, same
 * muted 13 px, no border and no new token — only ~41 px of height.
 */
export function SiteFooter() {
  return (
    <footer className="bv-footer">
      <p>
        {FOOTER.prefix}{' '}
        <a className="bv-footer-link" href={FOOTER.href}>
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
