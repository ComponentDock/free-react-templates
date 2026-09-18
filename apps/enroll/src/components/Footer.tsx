export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm text-[var(--color-caption)]">
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-gray-900 underline transition-colors duration-300 hover:text-[var(--color-brand)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
