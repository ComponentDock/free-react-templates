import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const SCROLL_THRESHOLD = 400

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg transition-colors hover:bg-brand-600"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
