import { useEffect } from 'react'
import { MegaDropdown } from './components/MegaDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Droptile — Mega Menu Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-droptile-bg text-droptile-text">
      <main className="flex-1 py-28">
        <h2 className="mb-12 text-center text-[20px] font-normal text-droptile-heading">
          Dropdown #6
        </h2>
        <MegaDropdown />
      </main>
      <Footer />
    </div>
  )
}
