export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-gray-900 dark:text-white">CouponModal</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A coupon discount popup for your next project.
          </p>
        </div>
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-gray-600 transition-colors hover:text-teal-400 dark:text-gray-300 dark:hover:text-teal-400"
        >
          More templates at Component Dock
        </a>
      </div>
    </footer>
  )
}
