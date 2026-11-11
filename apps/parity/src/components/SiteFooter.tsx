import { COMPONENT_DOCK, FOOTER_LINK_LABEL, FOOTER_PREFIX } from '../content'

/**
 * The port's only other addition: one slim branded strip on the page ground.
 * It introduces no colour, radius, border or band of its own, so it adds
 * nothing to the page but height.
 */
export function SiteFooter() {
  return (
    <footer className="pt-footer">
      <p className="pt-footer-line">
        {FOOTER_PREFIX}{' '}
        <a
          className="pt-footer-link"
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
