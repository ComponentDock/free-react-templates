import { FOOTER } from '../data/site'

/**
 * The reference ends at the search panel with no footer at all, so the port
 * adds one slim strip in the same 13 px muted type — no new colour, no new
 * radius — and every template points back at the marketplace. It sits outside
 * the `100vh` shell so the document grows by its height instead of the hero
 * losing the space.
 */
export function SiteFooter() {
  return (
    <footer className="lk-footer">
      <p>
        {FOOTER.prefix}{' '}
        <a href={FOOTER.href} target="_blank" rel="noreferrer noopener">
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
