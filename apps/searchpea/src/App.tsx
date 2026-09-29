import { useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'SearchPea — Search Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[url('https://picsum.photos/seed/searchpea/1920/1080')] bg-bottom bg-no-repeat bg-right bg-[length:100%_auto] font-sans">
      <main className="flex flex-grow items-start justify-center px-4 pt-[24vh]">
        <form
          role="search"
          aria-label="Search form"
          className="w-full max-w-[790px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchBar />
          <p className="pt-3 text-[15px] text-searchpea-hint pl-[26px]">
            ex. Game, Music, Video, Photography
          </p>
        </form>
      </main>
      <Footer />
    </div>
  )
}
