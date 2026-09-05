import { useEffect } from 'react'
import { PrivacyDropdown } from './components/PrivacyDropdown'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dropslide — Custom Dropdown'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#888]">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-28">
        <h1 className="mb-8 text-center text-xl font-normal text-[#212529]">Dropdown #1</h1>
        <PrivacyDropdown />
      </main>
      <Footer />
    </div>
  )
}
