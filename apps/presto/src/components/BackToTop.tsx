import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/**
 * Coral back-to-top control, fixed to the bottom-right corner and revealed once
 * the page has been scrolled past the hero.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={cn(
        'fixed right-[31px] bottom-[18px] z-40 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white shadow-[0_0_10px_3px_rgba(108,98,98,0.2)] transition-opacity hover:bg-brand-deep',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
