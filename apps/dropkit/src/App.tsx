import { useEffect } from 'react'
import { DropdownShowcase } from './components/DropdownShowcase'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dropkit — Dropdown Menu Showcase'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] text-[#6c757d]">
      <main className="flex-1">
        <DropdownShowcase />
      </main>
      <Footer />
    </div>
  )
}
