import { COMPONENT_DOCK_URL } from '../content'

/**
 * One line of small print. The design ends on the card row, so this
 * attribution is the recreation's single deliberate addition.
 */
export function PageFooter() {
  return (
    <footer className="px-4 pb-10 text-center text-[13px] text-muted">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-ink underline underline-offset-4 hover:text-accent"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
