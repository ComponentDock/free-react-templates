export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">BtnRiff</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <a href="#solid" className="hover:text-primary">
              Solid
            </a>
            <a href="#outline" className="hover:text-primary">
              Outline
            </a>
            <a href="#rounded" className="hover:text-primary">
              Rounded
            </a>
            <a href="#social" className="hover:text-primary">
              Social
            </a>
            <a href="#dropdowns" className="hover:text-primary">
              Dropdowns
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} BtnRiff. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
