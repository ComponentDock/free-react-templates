import { COMPONENT_DOCK_URL } from '../data'

/** The recreation's one addition: a single line of attribution. */
export function PageFooter() {
  return (
    <footer className="mt-4 text-center text-[13px] text-cream-muted">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-teal underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
