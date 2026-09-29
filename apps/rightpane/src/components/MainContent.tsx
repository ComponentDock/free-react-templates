import { ChevronRight, ChevronLeft } from 'lucide-react'

export interface MainContentProps {
  sidebarOpen: boolean
  onToggle: () => void
}

export function MainContent({ sidebarOpen, onToggle }: MainContentProps) {
  return (
    <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'mr-[300px]' : 'mr-0'}`}>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded bg-[#007bff] text-white shadow-lg transition-colors hover:bg-[#0069d9]"
        aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        data-testid="toggle-button"
      >
        {sidebarOpen ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
      </button>

      {/* Content area */}
      <div className="min-h-screen bg-white px-8 py-16 md:px-16 lg:px-24">
        <h1 className="mb-6 text-3xl font-bold text-[#212529]">Sidebar #04</h1>
        <div className="max-w-2xl space-y-4 text-[#6c757d]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </main>
  )
}
