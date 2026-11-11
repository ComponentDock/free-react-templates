import { COMPONENT_DOCK, FOOTER_LINK_LABEL, FOOTER_PREFIX } from '../content'

/**
 * The port's only addition: one slim branded strip below the band. It brings no
 * colour or radius of its own, so it adds nothing but height to the page.
 */
export function SiteFooter() {
  return (
    <footer className="rr-footer">
      <p className="rr-footer-line">
        {FOOTER_PREFIX}{' '}
        <a
          className="rr-footer-link"
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
