import { useEffect } from 'react'
import { DropdownShowcase } from './components/DropdownShowcase'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'DropVane — Request A Quote Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] text-gray">
      <main className="flex-1">
        <DropdownShowcase />
      </main>
      <Footer />
    </div>
  )
}
