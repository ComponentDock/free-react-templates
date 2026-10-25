import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

/** Keyboard entry point: hidden until focused. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[110] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
    >
      Skip to content
    </a>
  )
}

/**
 * 2 px brand bar at the very top: scrolled pixels over scrollable height. A
 * document shorter than the viewport stays at zero instead of dividing by a
 * negative maximum.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      data-testid="scroll-progress"
      className="fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"
      style={{ width: `${progress}%` }}
    />
  )
}

/**
 * Full-bleed sheet over the page until the document has loaded. A document
 * that is already complete never fires another `load`, so readiness is read on
 * mount as well as listened for.
 */
export function Preloader() {
  const [loaded, setLoaded] = useState(() => document.readyState === 'complete')

  useEffect(() => {
    if (document.readyState === 'complete') {
      return
    }
    const onLoad = () => setLoaded(true)
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  if (loaded || document.readyState === 'complete') {
    return null
  }

  return (
    <div
      data-testid="preloader"
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-950"
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary-600" />
    </div>
  )
}

/** 48 px brand disc, fixed bottom-right, shown once the page is past 300 px. */
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
        'fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0',
      )}
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}
