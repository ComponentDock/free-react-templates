import { COMPONENT_DOCK, FOOTER_LINK_LABEL, FOOTER_PREFIX } from '../content'

/**
 * The port's only addition: one slim branded strip below the section. It brings
 * no colour or radius of its own, so it adds nothing but height to every number
 * in the page's ladder.
 */
export function SiteFooter() {
  return (
    <footer className="lm-footer">
      <p className="lm-footer-line">
        {FOOTER_PREFIX}{' '}
        <a
          className="lm-footer-link"
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
