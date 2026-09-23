export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <a href="#home" className="text-xl font-bold tracking-tight">
            CLASSI<span className="text-brand">POST</span>
          </a>
          <p className="max-w-sm text-sm text-gray-400">
            A classified ads marketplace, recreated in React. Buy, sell, discover.
          </p>
          <p className="text-sm text-gray-500">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline-offset-2 hover:underline"
            >
              Component Dock
            </a>
          </p>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ClassiPost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
