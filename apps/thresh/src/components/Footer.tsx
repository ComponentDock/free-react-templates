export function Footer() {
  return (
    <footer className="text-center py-8">
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors duration-300 hover:opacity-80"
          style={{ color: '#f6c523' }}
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
