export function Footer() {
  return (
    <footer
      className="border-t border-gray-200 bg-white px-6 py-4 text-center text-xs text-body-text"
      data-testid="footer"
    >
      <p>
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-medium text-accent underline transition-colors hover:text-accent-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
