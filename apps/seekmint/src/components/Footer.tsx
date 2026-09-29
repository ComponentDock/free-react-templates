export function Footer() {
  return (
    <footer className="py-6 text-center">
      <p className="text-sm text-seekmint-footer">
        &copy; {new Date().getFullYear()} Seekmint. All rights reserved.
      </p>
      <p className="mt-1 text-sm text-seekmint-footer">
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-seekmint-link underline underline-offset-2 transition-colors hover:text-seekmint-link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
