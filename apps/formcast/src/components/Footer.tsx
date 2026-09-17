export function Footer() {
  return (
    <footer className="py-6 text-center" data-testid="footer">
      <p className="text-sm text-gray-500">
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand underline underline-offset-2 transition-colors hover:text-brand-dark"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
