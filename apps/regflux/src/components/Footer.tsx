export function Footer() {
  return (
    <footer className="bg-brand py-8 text-center dark:bg-gray-950">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-accent underline underline-offset-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
