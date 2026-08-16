import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/** Mint circular back-to-top button, fixed bottom-right, shown once the page
 *  is scrolled down; clicking scrolls smoothly to the top. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Back to top"
      className={cn(
        'fixed bottom-5 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-ink shadow-lg transition-opacity hover:bg-brand-dark',
        visible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
