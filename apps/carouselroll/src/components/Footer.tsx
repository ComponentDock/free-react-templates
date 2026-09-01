export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-brand/20 bg-white py-12 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-bold text-gray-900 dark:text-white">CarouselRoll</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Explore stunning travel destinations through interactive carousels.
          </p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {currentYear} CarouselRoll. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand underline hover:text-primary-600 dark:hover:text-primary-400"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
