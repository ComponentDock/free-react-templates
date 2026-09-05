export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <span className="text-sm font-semibold text-gray-800 dark:text-white">Checkpad</span>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Bootstrap Checkbox Component Demo
          </p>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#198754] hover:text-[#157347] dark:text-[#75b798] dark:hover:text-[#6aa98a]"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
