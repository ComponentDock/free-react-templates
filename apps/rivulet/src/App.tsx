import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PostSection } from './components/PostSection'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { posts } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Rivulet — Photography Blog'
  }, [])

  return (
    <div className="bg-navy font-sans text-white">
      <Header />
      <main>
        <Hero />
        {posts.map((post) => (
          <PostSection key={post.seed} post={post} />
        ))}
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
