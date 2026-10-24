import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/** 40px neon circle, revealed after one viewport of scroll. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
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
      className="fixed right-4 bottom-[18px] z-40 flex size-10 items-center justify-center rounded-full border-2 border-transparent bg-neon text-ink shadow-[0_0_10px_3px_rgba(108,98,98,0.2)] lg:right-[31px]"
    >
      <ArrowUp aria-hidden="true" className="size-4" />
    </button>
  )
}
