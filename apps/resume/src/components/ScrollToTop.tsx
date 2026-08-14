import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/** Fixed circular coral scroll-to-top button (bottom-right) that appears
 *  after the user scrolls down and returns to the top when activated. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-8 right-8 z-50 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white shadow-lg transition-opacity hover:bg-primary-700',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ChevronUp className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
