import { COMPONENT_DOCK, FOOTER_LINK_LABEL, FOOTER_PREFIX } from '../data/site'

/**
 * The port's only addition: one slim branded strip below the section. It
 * introduces no colour or radius of its own, so it adds nothing but height to
 * every number in the page's ladder.
 */
export function SiteFooter() {
  return (
    <footer className="rc-footer">
      <p className="rc-footer-line">
        {FOOTER_PREFIX}{' '}
        <a
          className="rc-footer-link"
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
