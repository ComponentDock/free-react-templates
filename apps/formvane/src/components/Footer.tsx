export function Footer() {
  return (
    <footer className="mt-10 text-center text-xs text-surface-500">
      <p style={{ fontFamily: 'Poppins, sans-serif' }}>
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="underline transition-colors hover:text-brand-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
