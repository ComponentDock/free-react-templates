import type { ReactNode } from 'react'

/** Uppercase bold section title with a 1px light underline and generous
    bottom padding (reference: the .p-title pattern). */
export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 border-b border-subline pb-5 text-lg font-bold uppercase tracking-wide">
      {children}
    </h2>
  )
}
