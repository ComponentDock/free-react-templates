/**
 * Keyboard entry point: the first Tab press offers a jump past the header and
 * the hero straight into the page body.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-btn focus:bg-white focus:px-4 focus:py-2 focus:text-brand"
    >
      Skip to content
    </a>
  )
}
