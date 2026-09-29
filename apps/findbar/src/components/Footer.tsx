export function Footer() {
  return (
    <footer className="py-6 text-center">
      <p className="text-sm text-findbar-footer">
        &copy; {new Date().getFullYear()} FindBar. All rights reserved.
      </p>
      <p className="mt-1 text-sm text-findbar-footer">
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-findbar-link underline decoration-blue-300 underline-offset-2 transition-colors hover:text-findbar-link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
