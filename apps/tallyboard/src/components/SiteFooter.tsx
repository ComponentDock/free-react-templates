import { COMPONENT_DOCK, FOOTER_LINK_LABEL, FOOTER_PREFIX } from '../content'

/**
 * The port's only addition: one slim branded strip below the section. It
 * introduces no colour, radius, border or band of its own, so it adds nothing
 * but height to the page's measurements.
 */
export function SiteFooter() {
  return (
    <footer className="tb-footer">
      <p className="tb-footer-line">
        {FOOTER_PREFIX}{' '}
        <a
          className="tb-footer-link"
          href={COMPONENT_DOCK}
          target="_blank"
          rel="noreferrer noopener"
        >
          {FOOTER_LINK_LABEL}
        </a>
      </p>
    </footer>
  )
}
