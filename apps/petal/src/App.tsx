import { useEffect } from 'react'
import { BlogPosts } from './components/BlogPosts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { InstagramStrip } from './components/InstagramStrip'
import { Sidebar } from './components/Sidebar'

export function App() {
  useEffect(() => {
    document.title = 'Petal — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body dark:bg-gray-900">
      <Header />
      <main>
        <HeroSlider />
        <section className="bg-section px-4 py-14 dark:bg-gray-900">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_360px]">
            <BlogPosts />
            <Sidebar />
          </div>
        </section>
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
