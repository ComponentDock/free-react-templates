import { useEffect } from 'react'
import { Dropdown } from './components/Dropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fount — Source-Picker Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-fount-text">
      <main className="flex-1 py-28">
        <h2 className="text-center text-[20px] font-normal text-fount-heading">Dropdown #4</h2>
        <div className="mt-12 flex justify-center px-4">
          <Dropdown />
        </div>
      </main>
      <Footer />
    </div>
  )
}
