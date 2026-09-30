import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { PostCard } from './components/PostCard'

const POSTS = [
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sg-post-1',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sg-post-2',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sg-post-3',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sg-post-4',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sg-post-5',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sg-post-6',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sg-post-7',
  },
  {
    title: 'How the gut microbes you are born with affect your lifelong health',
    date: 'Dec 17, 2019',
    seed: 'sg-post-8',
  },
]

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen((prev) => !prev)

  return (
    <div className="flex min-h-screen bg-content-bg">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      {/* Main area offset by sidebar width on desktop */}
      <main className="flex flex-1 flex-col p-6 lg:ml-72">
        <h1 className="sr-only">Sidegate</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {POSTS.map((post, i) => (
            <PostCard key={i} title={post.title} date={post.date} seed={post.seed} />
          ))}
        </div>
      </main>
    </div>
  )
}
