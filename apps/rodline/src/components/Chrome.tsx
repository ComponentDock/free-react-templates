import { useEffect, useState } from 'react'

/** Keyboard entry point: hidden until focused. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
    >
      Skip to content
    </a>
  )
}

/**
 * 2 px brand strip pinned to the top edge: scrolled pixels over scrollable
 * height. A document shorter than the viewport stays at zero instead of
 * dividing by a negative maximum.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      role="progressbar"
      aria-label="Reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      data-testid="scroll-progress"
      className="pointer-events-none fixed top-0 left-0 z-[60] h-0.5 bg-primary-600"
      style={{ width: `${progress}%` }}
    />
  )
}

/**
 * Full-bleed sheet over the page until the document has loaded, then a 300 ms
 * fade before it is removed. A document that is already complete never fires
 * another `load`, so readiness is read on mount as well as listened for.
 */
export function Preloader() {
  const [phase, setPhase] = useState<'loading' | 'fading' | 'gone'>(() =>
    document.readyState === 'complete' ? 'fading' : 'loading',
  )

  useEffect(() => {
    const finish = () => {
      setPhase('fading')
      window.setTimeout(() => setPhase('gone'), 300)
    }

    if (document.readyState === 'complete') {
      finish()
      return
    }

    window.addEventListener('load', finish, { once: true })
    return () => window.removeEventListener('load', finish)
  }, [])

  if (phase === 'gone') {
    return null
  }

  return (
    <div
      data-testid="preloader"
      data-phase={phase}
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-950 ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-primary-600" />
    </div>
  )
}
