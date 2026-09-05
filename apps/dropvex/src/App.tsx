import { useEffect } from 'react'
import { SplitDropdown } from './components/SplitDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'DropVex — Split-Button Dropdown Navbar'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#fafafa] text-gray">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28">
        <h1 className="mb-8 text-center text-[28px] font-normal text-black">Dropdown Navbar</h1>
        <SplitDropdown />
      </main>
      <Footer />
    </div>
  )
}
