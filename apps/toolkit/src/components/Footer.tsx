export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-8 text-center text-sm text-gray-500">
      <p>
        &copy; {year} Toolkit. All Rights Reserved. Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-medium text-primary-400 hover:underline"
        >
          Component Dock
        </a>
      </p>
    </footer>
  )
}
