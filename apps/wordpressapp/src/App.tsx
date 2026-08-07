import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AppSplit } from './components/AppSplit'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'WordpressApp — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <AppSplit />
      </main>
      <Footer />
    </div>
  )
}
