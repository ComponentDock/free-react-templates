import { useEffect } from 'react'
import { Banner } from './components/Banner'
import { BorderDivider } from './components/BorderDivider'
import { CategoryGrid } from './components/CategoryGrid'
import { FeaturedPosts } from './components/FeaturedPosts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PostList } from './components/PostList'
import { Sidebar } from './components/Sidebar'

export function App() {
  useEffect(() => {
    document.title = 'Ledger — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-heading">
      <Header />
      <main>
        <Banner />
        <FeaturedPosts />
        <BorderDivider />
        <CategoryGrid />
        <BorderDivider />
        <section aria-label="All posts" className="py-[100px]">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-4 lg:grid-cols-[1fr_340px]">
            <PostList />
            <Sidebar />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
