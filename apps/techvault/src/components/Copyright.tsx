export function Copyright() {
  return (
    <div className="bg-ink border-t border-gray-800 py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs text-gray-500 md:flex-row">
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | TechVault</p>
        <p>
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </div>
  )
}
