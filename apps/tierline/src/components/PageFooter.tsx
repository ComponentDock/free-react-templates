import { COMPONENT_DOCK_URL } from '../content'

/**
 * One line of small print under the band — the page's only off-format anchor
 * and the only place the design leaves its own palette.
 */
export function PageFooter() {
  return (
    <footer className="px-4 pb-8 text-center text-[13px] text-plate-muted">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-lavender underline underline-offset-4 transition-colors hover:text-white"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
