import { useState } from 'react'
import { PostGrid } from './components/PostGrid'
import { ContactSidebar } from './components/ContactSidebar'
import { ChatToggleButton } from './components/ChatToggleButton'
import { Footer } from './components/Footer'

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink">
      <div className="relative flex flex-1">
        <main className="flex-1 px-6 py-4">
          <PostGrid className="mt-4" />
        </main>

        {!sidebarOpen && (
          <ChatToggleButton
            onClick={() => setSidebarOpen(true)}
            className="fixed right-6 top-6 z-50"
          />
        )}

        <ContactSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      <Footer />
    </div>
  )
}
