/**
 * The hero badge's glyph: two interlocking rings, a diamond above them and a small heart below — the
 * theme's own "diamond ring" mark, redrawn inline (no icon-font glyph is copied).
 */
export function RingsBadge({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" focusable="false">
      <circle cx="24" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <path d="M32 6l7 9-7 9-7-9z" />
      <path d="M32 59c-6-4-9-7-9-11a4.5 4.5 0 019-2.6 4.5 4.5 0 019 2.6c0 4-3 7-9 11z" />
    </svg>
  )
}
