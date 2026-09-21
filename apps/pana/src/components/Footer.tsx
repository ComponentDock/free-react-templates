export function Footer() {
  return (
    <footer className="bg-footer-bg py-8">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <p className="font-body text-sm text-footer-text">
          &copy; {new Date().getFullYear()} Pana Photography. All rights reserved.
        </p>
        <p className="mt-2 font-body text-xs text-footer-link">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand hover:text-brand-light"
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
