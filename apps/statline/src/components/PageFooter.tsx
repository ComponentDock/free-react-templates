import { COMPONENT_DOCK_URL } from '../content'

/**
 * One line of small print under the band — the page's only anchor and the only
 * focusable element on it, set in the same 13 px footnote ink as the cards so
 * the page still reads as one band.
 */
export function PageFooter() {
  return (
    <footer className="px-4 pb-8 text-center text-[13px] text-[#64748b]">
      <p className="m-0">
        More templates at{' '}
        <a
          href={COMPONENT_DOCK_URL}
          className="font-semibold text-[#0f172a] underline underline-offset-4 hover:text-[#4f46e5]"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
