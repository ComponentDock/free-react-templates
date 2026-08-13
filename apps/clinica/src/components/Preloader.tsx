import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { brand } from '../data'

/** Full-screen preloader: light `#f7f7f7` overlay with a rotating ring
 *  (top border in brand blue) and the logo mark; fades out shortly after
 *  the page loads. */
export function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 800)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      data-testid="preloader"
      aria-hidden="true"
      className={cn(
        'fixed inset-0 z-[999999] flex flex-col items-center justify-center gap-6 bg-[#f7f7f7] transition-opacity duration-500',
        hidden && 'pointer-events-none opacity-0',
      )}
    >
      <div className="h-[100px] w-[100px] animate-spin rounded-full border border-transparent border-t-[#0f61ef]" />
      <span className="font-sans text-2xl font-bold text-[#030431]">{brand.name}.</span>
    </div>
  )
}
