import type { ReactNode } from 'react'

interface OverlayProps {
  children: ReactNode
}

export function Overlay({ children }: OverlayProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
      role="dialog"
      aria-modal="true"
      aria-label="Search overlay"
    >
      {children}
    </div>
  )
}
