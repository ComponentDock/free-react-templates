import { COMPONENT_DOCK_URL } from '../content'

/**
 * One line of small print under the band — the page's only off-format anchor
 * and the only focusable element on it.
 */
export function PageFooter() {
  return (
    <footer className="px-4 pb-8 text-center text-[13px] text-sub">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-ink underline underline-offset-4 hover:text-[#0f766e]"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
