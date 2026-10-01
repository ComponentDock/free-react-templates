import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      className="fixed bottom-20 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 transition-colors hover:bg-primary-500"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
