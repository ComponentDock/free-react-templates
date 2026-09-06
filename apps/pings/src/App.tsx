import { useEffect } from 'react'
import { NotificationsDropdown } from './components/NotificationsDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pings — Notifications Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#b3b3b3]">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28">
        <h2 className="mb-8 text-center text-xl font-medium text-[#212529]">Dropdown</h2>
        <NotificationsDropdown />
      </main>
      <Footer />
    </div>
  )
}
