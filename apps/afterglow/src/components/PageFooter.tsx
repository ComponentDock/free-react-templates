import { FOOTER } from '../data/hero'

/**
 * The port's only addition: the Component Dock line, below the one-screen root
 * so it never competes with the 950 px hero document.
 */
export function PageFooter() {
  return (
    <footer className="ag-footer">
      <p className="ag-footer-line">
        {FOOTER.prefix}{' '}
        <a href={FOOTER.href} className="ag-footer-link">
          {FOOTER.linkLabel}
        </a>
      </p>
    </footer>
  )
}
