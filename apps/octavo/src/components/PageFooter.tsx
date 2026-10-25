import { COMPONENT_DOCK_URL } from '../content'

/**
 * The one piece of chrome the repo requires: a single line of small print on
 * the paper ground, and the page's only off-format anchor.
 */
export function PageFooter() {
  return (
    <footer className="px-4 pb-8 text-center text-xs text-muted">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-muted underline underline-offset-4 transition-colors hover:text-ink"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
