/**
 * Minimal footer with Component Dock attribution.
 */
export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8" role="contentinfo">
      <div className="flex flex-col items-center justify-center gap-2 text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Plinth. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-600 transition-colors hover:text-gray-900 hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
