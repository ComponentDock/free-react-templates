import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-lg transition-all hover:bg-brand-dark z-50"
    >
      <ArrowUp size={20} />
    </button>
  )
}
