import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
}

/** Section heading with the reference's 1px ink bottom border. */
export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="inline-block border-b border-ink pb-1.5 text-xl font-normal text-ink">
      {children}
    </h2>
  )
}
