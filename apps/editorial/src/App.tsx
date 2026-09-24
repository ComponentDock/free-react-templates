import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { HeroSlider } from './components/HeroSlider'
import { BlogGrid } from './components/BlogGrid'
import { Pagination } from './components/Pagination'

const slides = [
  {
    tag: 'Style',
    heading: 'Strategic Design for Brands',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/editorial-hero1/1600/900',
  },
  {
    tag: 'Sports',
    heading: 'Creators of Brands Template',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/editorial-hero2/1600/900',
  },
  {
    tag: 'Fashion',
    heading: 'Design & Develop Functional Sites',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/editorial-hero3/1600/900',
  },
]

const blogPosts = [
  {
    tag: 'Nature',
    title: 'Gym Fitness',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/editorial-blog1/800/600',
    size: 'large' as const,
  },
  {
    tag: 'Auto',
    title: 'BMW i8',
    description: 'Even the all-powerful Pointing has no control about',
    image: 'https://picsum.photos/seed/editorial-blog2/400/300',
    size: 'small' as const,
  },
  {
    tag: 'Sports',
    title: 'Boxing Sports',
    description: 'Even the all-powerful Pointing has no control about',
    image: 'https://picsum.photos/seed/editorial-blog3/400/300',
    size: 'small' as const,
  },
  {
    tag: 'Place',
    title: 'Nature',
    description: 'Even the all-powerful Pointing has no control about',
    image: 'https://picsum.photos/seed/editorial-blog4/800/300',
    size: 'wide' as const,
  },
  {
    tag: 'Sports',
    title: 'Surfing',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/editorial-blog5/400/600',
    size: 'tall' as const,
  },
  {
    tag: 'Movies',
    title: 'Liam Neeson',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/editorial-blog6/400/300',
    size: 'small' as const,
  },
  {
    tag: 'Movies',
    title: 'John Wick',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/editorial-blog7/400/300',
    size: 'small' as const,
  },
  {
    tag: 'Sports',
    title: 'Boxing Sports',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/editorial-blog8/400/600',
    size: 'tall' as const,
  },
  {
    tag: 'Place',
    title: 'Nature',
    description: 'Even the all-powerful Pointing has no control about',
    image: 'https://picsum.photos/seed/editorial-blog9/800/300',
    size: 'wide' as const,
  },
  {
    tag: 'Auto',
    title: 'BMW i8',
    description: 'Even the all-powerful Pointing has no control about',
    image: 'https://picsum.photos/seed/editorial-blog10/400/300',
    size: 'small' as const,
  },
  {
    tag: 'Sports',
    title: 'Boxing Sports',
    description: 'Even the all-powerful Pointing has no control about',
    image: 'https://picsum.photos/seed/editorial-blog11/400/300',
    size: 'small' as const,
  },
  {
    tag: 'Place',
    title: 'Nature',
    description: 'Even the all-powerful Pointing has no control about',
    image: 'https://picsum.photos/seed/editorial-blog12/800/300',
    size: 'wide' as const,
  },
  {
    tag: 'Healthy',
    title: 'Gym Fitness',
    description:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/editorial-blog13/800/600',
    size: 'large' as const,
  },
]

export function App() {
  useEffect(() => {
    document.title = 'Editorial — Magazine Template'
  }, [])

  return (
    <div className="flex min-h-screen font-sans text-text">
      <Sidebar />
      <main className="ml-64 flex-1">
        <HeroSlider slides={slides} />
        <BlogGrid posts={blogPosts} />
        <Pagination currentPage={1} totalPages={4} />
      </main>
    </div>
  )
}
