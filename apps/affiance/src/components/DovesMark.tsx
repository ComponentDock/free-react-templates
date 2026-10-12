/**
 * The theme's signature motif: a pair of doves with a heart, and the single dove its message cards
 * carry. Both are drawn inline so the sizes and tint of every placement stay ours.
 */
export function DovesMark({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M22 78c8-2 14-7 18-13-9 1-16-4-18-12 6 3 12 2 16-2-3-8 0-16 7-21 3 9 9 16 17 20-1 13-9 24-21 28-7 2-14 3-19 0z" />
      <path d="M98 78c-8-2-14-7-18-13 9 1 16-4 18-12-6 3-12 2-16-2 3-8 0-16-7-21-3 9-9 16-17 20 1 13 9 24 21 28 7 2 14 3 19 0z" />
      <path d="M60 45c-5-3-8-6-8-9.5a4 4 0 017-2.4 4 4 0 017 2.4C66 39 63 42 60 45z" />
    </svg>
  )
}

export function DoveMark({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M14 44c9-2 16-8 21-15-10 1-18-4-20-13 7 3 14 2 19-2-4-9 0-17 8-22 3 10 10 17 19 21-1 15-10 27-24 31-8 2-16 3-23 0z" />
    </svg>
  )
}
