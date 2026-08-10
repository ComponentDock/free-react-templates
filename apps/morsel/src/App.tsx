import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Slider } from './components/Slider'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Morsel'
  }, [])

  return (
    <div className="min-h-screen bg-blog-bg font-sans text-ink">
      <Navbar />
      <main>
        <Slider />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
