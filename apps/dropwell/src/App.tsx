import { useEffect } from 'react'
import { NestedDropdown } from './components/NestedDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dropwell — Nested Dropdown Menu'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa] text-[#6c757d]">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28">
        <h1 className="mb-8 text-center text-3xl font-medium text-[#212529]">Dropdown</h1>
        <NestedDropdown />
      </main>
      <Footer />
    </div>
  )
}
