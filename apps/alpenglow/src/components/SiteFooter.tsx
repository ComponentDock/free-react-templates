import { FOOTER } from '../data/site'

/**
 * The reference ends at the chapter strip, so the port adds one slim strip in
 * the same 13 px soft type and no new colour or radius — every template points
 * back at the marketplace.
 */
export function SiteFooter() {
  return (
    <footer className="ap-footer">
      <p>
        {FOOTER.prefix}{' '}
        <a className="ap-footer-link" href={FOOTER.href}>
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
