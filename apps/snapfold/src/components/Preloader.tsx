import { useEffect, useState } from 'react'

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onComplete()
    }, 1500)
    return () => clearTimeout(timer)
  }, [onComplete])

  if (!visible) return null

  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black transition-opacity duration-500"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-transparent border-t-[#f44336] border-r-[#673ab7]" />
    </div>
  )
}
