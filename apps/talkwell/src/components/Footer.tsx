export function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="mx-auto max-w-2xl px-4 text-center text-sm text-gray-500">
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 underline hover:text-gray-900"
        >
          Component Dock
        </a>
        <p className="mt-2">© {new Date().getFullYear()} Talkwell. All rights reserved.</p>
      </div>
    </footer>
  )
}
