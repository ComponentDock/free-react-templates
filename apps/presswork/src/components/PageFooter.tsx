import { FOOTER } from '../data/site'

/**
 * The port's only addition: the Component Dock line, below the full-height shell
 * so the one-screen measurements still hold.
 */
export function PageFooter() {
  return (
    <footer className="pw-footer">
      <p className="pw-footer-line">
        {FOOTER.prefix}{' '}
        <a href={FOOTER.href} className="pw-footer-link">
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
