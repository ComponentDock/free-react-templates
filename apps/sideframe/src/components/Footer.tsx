import { cn } from '@free-react-templates/ui'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'border-t border-border bg-white py-6 text-center text-sm text-muted',
        className,
      )}
    >
      <p>
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-medium text-brand underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
