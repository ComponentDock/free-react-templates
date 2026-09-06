import { useEffect } from 'react'
import { ProfileDropdown } from './components/ProfileDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dropmenu — Profile Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-dropmenu-bg text-dropmenu-text">
      <main className="flex flex-1 flex-col items-center px-4 py-28">
        <h2 className="mb-12 text-center text-[20px] font-normal text-dropmenu-heading">
          Dropdown #8
        </h2>
        <ProfileDropdown />
      </main>
      <Footer />
    </div>
  )
}
