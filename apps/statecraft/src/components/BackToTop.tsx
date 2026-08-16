import { ArrowUp } from 'lucide-react'

/** Fixed yellow circular back-to-top button. */
export function BackToTop() {
  return (
    <a
      href="#home"
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-50 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-accent"
    >
      <ArrowUp className="h-5 w-5" />
    </a>
  )
}
