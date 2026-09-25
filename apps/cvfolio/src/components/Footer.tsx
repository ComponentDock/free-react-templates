export function Footer() {
  return (
    <footer className="bg-heading py-6">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CvFolio. Made with{' '}
          <span className="text-red-500" aria-label="love">
            &#10084;
          </span>{' '}
          by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition-colors hover:text-white"
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
