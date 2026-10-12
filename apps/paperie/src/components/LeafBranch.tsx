/**
 * The larger ornament: a pale leaf branch, used at the edges of the story and gallery bands and
 * outside the reply card. Decorative only, so it carries no name for assistive technology.
 */
export function LeafBranch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M64 156C50 118 50 74 64 30" />
      <path d="M60 128c-16-2-26-12-28-28 16 0 26 10 28 28Z" />
      <path d="M68 128c16-2 26-12 28-28-16 0-26 10-28 28Z" />
      <path d="M62 88c-14-2-23-11-25-25 14 0 23 9 25 25Z" />
      <path d="M66 88c14-2 23-11 25-25-14 0-23 9-25 25Z" />
      <path d="M64 48c-10-2-16-9-17-19 10 0 16 7 17 19Z" />
      <path d="M64 48c10-2 16-9 17-19-10 0-16 7-17 19Z" />
      <circle cx="64" cy="20" r="6" />
    </svg>
  )
}
