import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { RecentJobs } from './components/RecentJobs'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'JobLaunch — Job Portal Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RecentJobs />
        <Features />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
