import type { ReactNode } from 'react'

interface OverlayProps {
  children: ReactNode
}

export function Overlay({ children }: OverlayProps) {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#757575] font-sans overflow-hidden">
      {children}
    </div>
  )
}
