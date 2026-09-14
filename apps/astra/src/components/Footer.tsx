import { cn } from '@free-react-templates/ui'
import { ChevronUp } from 'lucide-react'

export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={cn('bg-dark py-8', className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-sans text-sm text-white/60">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-primary-400" aria-hidden="true">
              &#9829;
            </span>{' '}
            by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 transition-colors hover:text-primary-300"
            >
              Component Dock
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-400"
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
