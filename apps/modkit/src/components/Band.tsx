import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

export interface BandProps {
  id?: string
  title: string
  lead: string
  className?: string
  children: ReactNode
}

/**
 * One showcase band: the catalog's repeating container (7rem vertical rhythm)
 * whose header row is a narrow column holding an h2 with the kit's signature
 * 2px indigo left accent bar plus a `lead` description paragraph.
 */
export function Band({ id, title, lead, className, children }: BandProps) {
  return (
    <section id={id} className={cn('bg-white px-6 py-28', className)}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 md:w-7/12">
          <h2 className="border-l-2 border-kit-primary pl-2.5 text-[2rem] leading-none">{title}</h2>
          <p className="mt-4 text-[1.25rem] leading-relaxed">{lead}</p>
        </div>
        <div className="space-y-10">{children}</div>
      </div>
    </section>
  )
}

/** Light-gray docs-style panel wrapping a demo group. */
export function DemoPanel({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('rounded bg-band p-6', className)}>{children}</div>
}

/** Sub-group label inside a band (renders as the source's `h4`). */
export function GroupLabel({ className, children }: { className?: string; children: ReactNode }) {
  return <h4 className={cn('mb-4 text-[1.5rem]', className)}>{children}</h4>
}
