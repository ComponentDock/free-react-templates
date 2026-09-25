export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Dossier. All rights reserved. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-leaf-400 hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
