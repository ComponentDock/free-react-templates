import { useEffect } from 'react'
import { NotificationDropdown } from './components/NotificationDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Chime — Notifications Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#6c81f4] text-white">
      <main className="flex-1">
        <section className="py-[7em]">
          <div className="mx-auto max-w-[1140px] px-4">
            <h2 className="mb-5 text-center font-['Roboto',Arial,sans-serif] text-[28px] text-white">
              Dropdown #04
            </h2>
            <div className="flex justify-center">
              <NotificationDropdown />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
