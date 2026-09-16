export function FooterBottom() {
  return (
    <div className="border-t border-gray-200 bg-footer-bg py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Insight. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-medium text-brand transition-colors hover:text-brand-dark"
          >
            Component Dock
          </a>
        </p>
      </div>
    </div>
  )
}
