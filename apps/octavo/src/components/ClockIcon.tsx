/**
 * The page's only glyph: a 15px clock drawn inline, so it inherits the read
 * pill's text colour through `currentColor`.
 */
export function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[15px] w-[15px] fill-none stroke-current stroke-2 [stroke-linecap:round]"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}
