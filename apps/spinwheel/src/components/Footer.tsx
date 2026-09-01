import { cn } from '@free-react-templates/ui'

export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn('py-6 text-center text-sm text-muted border-t border-gray-100', className)}
    >
      <p>
        Powered by{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-dark transition-colors"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
