interface FooterProps {
  className?: string
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`py-6 text-center text-sm text-text-muted ${className}`} role="contentinfo">
      <p>
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="underline hover:text-text transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
