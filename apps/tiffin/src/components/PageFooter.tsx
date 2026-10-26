import { COMPONENT_DOCK_URL } from '../data/recipes'

/** The recreation's one addition: a single line of attribution. */
export function PageFooter() {
  return (
    <footer className="mt-6 text-[13px] text-muted">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-eyebrow underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
