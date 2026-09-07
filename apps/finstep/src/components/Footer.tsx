import { cn } from '@free-react-templates/ui'

export function Footer() {
  return (
    <footer
      className={cn('mt-8 border-t border-gray-200 bg-white/80 py-4 text-center backdrop-blur-sm')}
    >
      <p className="text-sm text-muted">
        Built with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-focus-green underline transition-colors hover:text-brand-orange"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
