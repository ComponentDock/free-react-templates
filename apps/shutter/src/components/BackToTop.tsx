import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary-900 text-white shadow-lg transition-opacity hover:bg-accent-500',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
