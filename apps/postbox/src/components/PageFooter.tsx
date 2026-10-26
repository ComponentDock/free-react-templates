import { COMPONENT_DOCK_URL } from '../data'

/** The recreation's one addition: a single line of attribution. */
export function PageFooter() {
  return (
    <footer className="mx-auto mt-[clamp(20px,4vw,32px)] max-w-[1160px] text-center text-[13px] leading-[1.5] text-muted">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="rounded-sm font-bold text-navy underline underline-offset-4 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
