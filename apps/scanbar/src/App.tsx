import { useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Scanbar — Quick City Search Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-body">
      <main
        className="flex flex-1 items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/scanbar-city/1920/1080')",
        }}
      >
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center font-heading text-[42px] font-bold uppercase text-white drop-shadow-md max-sm:text-[28px]">
            Quick Find Your City
          </h1>
          <SearchBar />
        </div>
      </main>
      <Footer />
    </div>
  )
}
