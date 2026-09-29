import { useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'

interface AppProps {
  onSearch?: (query: string, category: string) => void
}

export function App({ onSearch }: AppProps) {
  useEffect(() => {
    document.title = 'Seekbar — Search Form Bar'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center font-sans">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/seekbar-bg/1920/1080")',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Content */}
      <main className="relative z-10 w-full px-4">
        <SearchBar onSearch={onSearch} />
      </main>

      <Footer />
    </div>
  )
}
