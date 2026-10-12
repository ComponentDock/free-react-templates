/**
 * The design's signature decoration: a drawn flourish — a diamond between two sweeping stems with
 * leaves — used in white above and below the couple's names, and in the brand pink at the corners
 * of the journey cards and either side of the reservation card. Purely decorative, so it is hidden
 * from assistive technology; the `className` carries its size, colour and rotation.
 */
export function Ornament({ className }: { className: string }) {
  return (
    <svg
      data-ornament="true"
      viewBox="0 0 220 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M4 12c20 0 34-7 52-7 9 0 16 3 22 7" />
      <path d="M216 12c-20 0-34-7-52-7-9 0-16 3-22 7" />
      <path d="M110 3.5 118 12l-8 8.5L102 12l8-8.5Z" />
      <path d="M78 5.6c3.4 3.4 4.6 6.4 4.6 6.4s-3 1.2-6.4-2.2S73.4 4 73.4 4s1.2-1.8 4.6 1.6Z" />
      <path d="M142 5.6c-3.4 3.4-4.6 6.4-4.6 6.4s3 1.2 6.4-2.2 2.8-5.8 2.8-5.8-1.2-1.8-4.6 1.6Z" />
      <path d="M78 18.4c3.4-3.4 4.6-6.4 4.6-6.4s-3-1.2-6.4 2.2-2.8 5.8-2.8 5.8 1.2 1.8 4.6-1.6Z" />
      <path d="M142 18.4c-3.4-3.4-4.6-6.4-4.6-6.4s3-1.2 6.4 2.2 2.8 5.8 2.8 5.8-1.2 1.8-4.6-1.6Z" />
    </svg>
  )
}
