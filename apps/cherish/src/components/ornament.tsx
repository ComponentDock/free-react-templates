/** The gold flourish the design sets between a heading and the line under it. */
export function Ornament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 18"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 9c9-8 17-8 26 0-9 8-17 8-26 0Z" />
      <path d="M118 9c-9-8-17-8-26 0 9 8 17 8 26 0Z" />
      <path d="M30 9h27M63 9h27" />
      <circle cx="60" cy="9" r="3" />
    </svg>
  )
}
