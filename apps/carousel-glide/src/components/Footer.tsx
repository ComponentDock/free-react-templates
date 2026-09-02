import { cn } from '@free-react-templates/ui'

export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'py-8 text-center text-sm text-muted-foreground border-t border-gray-100',
        className,
      )}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <p>
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary-600 transition-colors font-medium"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
