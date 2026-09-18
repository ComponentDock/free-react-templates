export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-gray-100 py-6 ${className ?? ''}`}>
      <div className="text-center text-sm text-gray-500">
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-brand-coral hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
