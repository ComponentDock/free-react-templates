import type { ReactNode } from 'react'
import { containerClass, flushContainerClass } from '../lib/styles'

export interface ContainerProps {
  children: ReactNode
  /** Zeroes both gutters — the one band the design runs edge-to-edge. */
  flush?: boolean
}

/**
 * The page's own container: four tiers wide with `15px` gutters, or with both gutters zeroed where
 * the design runs a band edge-to-edge. It is the same box at every width, so the header and the
 * hero band line up on the same measured x.
 */
export function Container({ children, flush = false }: ContainerProps) {
  return (
    <div className={flush ? flushContainerClass : containerClass} data-testid={flush ? 'container-flush' : 'container'}>
      {children}
    </div>
  )
}
