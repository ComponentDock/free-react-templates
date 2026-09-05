export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <span className="text-sm font-semibold text-gray-800 dark:text-white">Warp</span>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Teleport Toggle Switch Demo
          </p>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#4cd964] hover:text-[#3cb550] dark:text-[#75e090] dark:hover:text-[#5fd47a]"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
