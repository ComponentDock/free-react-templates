import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'

/** The stand-in skyline photograph, seeded so it is deterministic. */
export const SKYLINE_SRC = 'https://picsum.photos/seed/foretaste-skyline/1900/900'

export interface ShellProps {
  children: ReactNode
  className?: string
}

/**
 * The whole poster: one full-height shell showing a single cover photograph,
 * with one violet→periwinkle brand wash at 80% opacity drawn over it and under
 * everything else.
 */
export function Shell({ children, className }: ShellProps) {
  return (
    <div
      data-testid="shell"
      className={cn(
        'relative z-[1] w-full min-h-screen bg-cover bg-center bg-no-repeat px-[15px] pb-[35px]',
        className,
      )}
      style={{ backgroundImage: `url(${SKYLINE_SRC})` }}
    >
      <span
        data-testid="wash"
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-b from-brand-from to-brand-to opacity-80"
      />
      {children}
    </div>
  )
}
