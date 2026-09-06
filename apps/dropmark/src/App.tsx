import { useEffect } from 'react'
import { Dropdown } from './components/Dropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dropmark — Filetype Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-dropmark-text">
      <main className="flex-1 py-28">
        <h2 className="mb-12 text-center text-[20px] font-normal text-dropmark-title">
          Dropdown #3
        </h2>
        <Dropdown />
      </main>
      <Footer />
    </div>
  )
}
