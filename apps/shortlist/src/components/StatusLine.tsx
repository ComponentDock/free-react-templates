interface StatusLineProps {
  message: string
}

/**
 * One announcement line for the whole grid: a second click replaces the
 * sentence instead of stacking a new one. It exists on first render with an
 * empty string so the reserved line box never shifts the page.
 */
export function StatusLine({ message }: StatusLineProps) {
  return (
    <p role="status" className="mt-4 min-h-[1.5em] text-[14px] font-semibold text-[#3f6212]">
      {message}
    </p>
  )
}
