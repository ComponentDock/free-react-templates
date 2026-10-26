import { FOOTER } from '../data/site'

/**
 * The port's only addition: the Component Dock line, below the full-height shell
 * so the one-screen measurements still hold.
 */
export function PageFooter() {
  return (
    <footer className="ot-footer">
      <p>
        {FOOTER.prefix}{' '}
        <a href={FOOTER.href} className="ot-footer-link">
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
