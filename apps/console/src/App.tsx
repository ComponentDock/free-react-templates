import { useEffect } from 'react'
import { DashboardDropdown } from './components/DashboardDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Console — Dashboard Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-console-heading">
      <main className="flex-1 py-28">
        <h2 className="mb-12 text-center text-[20px] font-normal text-console-heading">
          Dropdown #7
        </h2>
        <div className="flex justify-center px-4">
          <DashboardDropdown />
        </div>
      </main>
      <Footer />
    </div>
  )
}
