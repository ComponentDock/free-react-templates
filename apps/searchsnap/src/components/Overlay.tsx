import type { ReactNode } from 'react'

interface OverlayProps {
  children: ReactNode
}

export function Overlay({ children }: OverlayProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f8f9fa] relative font-sans">
      {children}
    </div>
  )
}
