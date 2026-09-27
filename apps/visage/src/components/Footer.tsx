export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6 text-center">
      <p className="text-xs text-body">
        &copy; {new Date().getFullYear()} Visage. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand underline transition-colors hover:text-brand-dark"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
