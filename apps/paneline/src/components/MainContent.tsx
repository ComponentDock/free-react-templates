import { Menu } from 'lucide-react'

interface MainContentProps {
  onToggle: () => void
}

export function MainContent({ onToggle }: MainContentProps) {
  return (
    <main className="flex-1 bg-page-bg p-6 md:p-12" data-testid="main-content">
      {/* Mobile toggle */}
      <button
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow md:hidden"
        onClick={onToggle}
        aria-label="Toggle sidebar"
        data-testid="main-toggle"
      >
        <Menu className="h-5 w-5" />
      </button>

      <h2 className="mb-6 text-2xl font-normal text-heading-text">Sidebar #08</h2>

      <div className="space-y-4 text-body-text leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </main>
  )
}
