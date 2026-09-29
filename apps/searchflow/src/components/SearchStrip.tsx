import type { ReactNode } from 'react'

interface SearchStripProps {
  children: ReactNode
}

export function SearchStrip({ children }: SearchStripProps) {
  return <div className="w-full bg-white h-[60px] flex items-center px-10">{children}</div>
}
