/** Decorative wavy divider line between blog posts / under widget titles. */
export function WavyDivider() {
  return (
    <div className="my-10 flex justify-center">
      <svg
        width="220"
        height="12"
        viewBox="0 0 220 12"
        fill="none"
        aria-hidden="true"
        className="text-primary"
      >
        <path
          d="M0 6 Q 11 0 22 6 T 44 6 T 66 6 T 88 6 T 110 6 T 132 6 T 154 6 T 176 6 T 198 6 T 220 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
