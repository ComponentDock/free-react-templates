export function MainContent() {
  return (
    <main className="min-h-screen flex-1 bg-page-bg p-6 md:p-12" data-testid="main-content">
      <h2 className="mb-4 text-2xl font-normal text-heading">Railgate</h2>

      <div className="space-y-4 text-body-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 pt-6 text-sm text-body-text">
        <p>
          Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-accent underline hover:text-accent-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </footer>
    </main>
  )
}
