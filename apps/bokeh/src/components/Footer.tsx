export function Footer() {
  return (
    <footer className="bg-heading py-8">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <p className="font-body text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Bokeh Photography. All rights reserved.
        </p>
        <p className="mt-2 font-body text-xs text-gray-500">
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
