import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/* BackToTop — fixed orange circle that appears after scrolling and smooth
   scrolls back to the top when clicked. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:brightness-110"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
