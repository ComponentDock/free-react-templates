interface WordmarkProps {
  tone?: 'dark' | 'light'
}

/** Three ascending bars inside a rounded square: the register mark the design
 * uses in its header and again in the footer. */
export function Wordmark({ tone = 'dark' }: WordmarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-primary-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      >
        <path d="M4 18.5h16" />
        <path d="M6.5 13.5h11" />
        <path d="M9 8.5h6" />
        <path d="M11 3.5h2" />
      </svg>
      <span
        className={
          tone === 'light'
            ? 'text-lg font-semibold tracking-tight text-white'
            : 'text-lg font-semibold tracking-tight text-gray-900'
        }
      >
        Chalkline
      </span>
    </span>
  )
}
