export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`mt-8 border-t border-input-border pt-4 ${className ?? ''}`}>
      <div className="text-center text-xs text-text-body">
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-brand-dark hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
