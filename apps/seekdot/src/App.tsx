import { useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SeekDot — Search Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center bg-seekdot-bg font-sans">
      <main className="flex w-full max-w-[540px] flex-col items-center px-4 pt-[7em]">
        <h1 className="mb-12 text-center text-[28px] font-normal leading-[1.5] text-seekdot-heading">
          SeekDot
        </h1>
        <div className="w-full flex justify-center">
          <SearchBar placeholder="Search..." />
        </div>
      </main>
      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  )
}
