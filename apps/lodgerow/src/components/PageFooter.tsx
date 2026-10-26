import { COMPONENT_DOCK_URL } from '../content'

/**
 * One line of small print under the list — the reference has no footer at all,
 * so this attribution is the recreation's single deliberate addition. It sits
 * in the same muted ink as the price's total line so the page still reads as
 * one band with three cards.
 */
export function PageFooter() {
  return (
    <footer className="px-4 pb-8 text-center text-[13px] text-muted">
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
