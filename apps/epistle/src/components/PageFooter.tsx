import { FOOTER } from '../data/site'

/**
 * The port's only addition: the Component Dock line, below the full-height shell
 * so the one-screen measurements still hold.
 */
export function PageFooter() {
  return (
    <footer className="ep-footer">
      <p>
        {FOOTER.prefix}{' '}
        <a href={FOOTER.href} className="ep-footer-link">
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
