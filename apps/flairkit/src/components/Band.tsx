import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface BandProps {
  id?: string
  className?: string
  children: ReactNode
}

/**
 * One showcase band — the kit's repeating container: 7rem vertical rhythm,
 * alternating white / light bands, holding a max-width column.
 */
export function Band({ id, className, children }: BandProps) {
  return (
    <section id={id} className={cn('bg-white px-6 py-28', className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

/** Band heading: the source's plain h3 in slate, weight 300, no accent bar. */
export function SectionHeading({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <h3 className={cn('mb-5 text-[2rem] leading-snug text-heading-slate', className)}>
      {children}
    </h3>
  )
}

/**
 * Label row: the source's `.section-heading > h3 > small` pattern — a small
 * gray label in the left column with its demos in the right column.
 */
export function LabelRow({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-2 md:flex-row md:items-center', className)}>
      <h3 className="text-[1.5rem] leading-none text-heading-slate md:w-1/4">
        <small className="text-[0.9rem] text-[#888]">{label}</small>
      </h3>
      <div className="flex flex-wrap items-center gap-2 md:w-3/4">{children}</div>
    </div>
  )
}

/** Sub-group heading inside a band (the source's `h4`). */
export function GroupHeading({ className, children }: { className?: string; children: ReactNode }) {
  return <h4 className={cn('mb-3 text-[1.5rem]', className)}>{children}</h4>
}
