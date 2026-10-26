import { LOGO_TITLE, LOGOS_ID, WORDMARKS } from '../data/hero'

/**
 * The logo cloud: an uppercase kicker — the document's only h2 — over six
 * translucent tiles. The six typographic treatments live in the data, so the
 * 520 px step for the tracked wordmark stays one rule instead of six.
 */
export function LogoCloud() {
  return (
    <section id={LOGOS_ID} aria-labelledby={`${LOGOS_ID}-title`} className="ag-logos">
      <h2 id={`${LOGOS_ID}-title`} className="ag-logos-title">
        {LOGO_TITLE}
      </h2>

      <ul className="ag-logo-list">
        {WORDMARKS.map(({ name, className, mark: Mark, markSize }) => (
          <li key={name} className={`ag-brand ${className}`}>
            <Mark size={markSize} aria-hidden="true" />
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}
