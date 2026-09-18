import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { PopularPosts } from './components/PopularPosts'
import { Categories } from './components/Categories'
import { RecentJobs } from './components/RecentJobs'
import { CtaBanner } from './components/CtaBanner'
import { DownloadApp } from './components/DownloadApp'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'HireFlow — Job Listing Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PopularPosts />
        <Categories />
        <RecentJobs />
        <CtaBanner />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  )
}
