import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HotPosts } from './components/HotPosts'
import { PostSections } from './components/PostSections'
import { Sidebar } from './components/Sidebar'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Marlowe — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <HotPosts />
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:flex-row">
          <PostSections />
          <Sidebar />
        </div>
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
