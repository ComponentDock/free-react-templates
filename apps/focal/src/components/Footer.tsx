export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Focal. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline transition-colors hover:text-brand-hover"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
