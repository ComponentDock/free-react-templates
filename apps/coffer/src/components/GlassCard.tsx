import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

interface GlassCardProps {
  /** id of the card's own heading — the section's accessible name. */
  labelledBy: string
  /** Extra utilities for the one card that carries its own floor (the bank card). */
  className?: string
  children: ReactNode
}

/** The glass shell: 24px radius, 24px padding, flex column, one white edge and the two-layer shadow. */
export function GlassCard({ labelledBy, className, children }: GlassCardProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn(
        'glass-card flex flex-col rounded-[24px] border border-[color:rgba(255,255,255,.28)] p-6',
        'text-[15px] leading-[1.5] text-white',
        'shadow-[0_24px_60px_-24px_rgba(10,0,30,.6),inset_0_1px_0_rgba(255,255,255,.25)]',
        className,
      )}
    >
      {children}
    </section>
  )
}
