import { COMPONENT_DOCK_URL } from '../data'

/** The recreation's one addition: a single line of attribution. */
export function PageFooter() {
  return (
    <footer className="mt-6 text-center text-[13px] text-muted">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold rounded-sm underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
