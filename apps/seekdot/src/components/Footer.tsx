export function Footer() {
  return (
    <footer className="py-6 text-center">
      <p className="text-sm text-seekdot-footer">
        &copy; {new Date().getFullYear()} SeekDot. All rights reserved.
      </p>
      <p className="mt-1 text-sm text-seekdot-footer">
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-seekdot-link underline underline-offset-2 transition-colors hover:text-seekdot-link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
