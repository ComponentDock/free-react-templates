import { useState } from 'react'
import { Share2, Eye, Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = ['All', 'Graphic Design', 'Web Design', 'Software', 'Apps']

const portfolioItems = [
  {
    title: 'Work 01',
    category: 'Graphic Design',
    image: 'https://picsum.photos/seed/craftline-w1/600/400',
    views: 100,
    likes: 49,
  },
  {
    title: 'Work 02',
    category: 'Software',
    image: 'https://picsum.photos/seed/craftline-w2/600/400',
    views: 100,
    likes: 49,
  },
  {
    title: 'Work 03',
    category: 'Graphic Design',
    image: 'https://picsum.photos/seed/craftline-w3/600/400',
    views: 100,
    likes: 49,
  },
  {
    title: 'Work 04',
    category: 'Apps',
    image: 'https://picsum.photos/seed/craftline-w4/600/400',
    views: 100,
    likes: 49,
  },
  {
    title: 'Work 05',
    category: 'Graphic Design',
    image: 'https://picsum.photos/seed/craftline-w5/600/400',
    views: 100,
    likes: 49,
  },
  {
    title: 'Work 06',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/craftline-w6/600/400',
    views: 100,
    likes: 49,
  },
]

export function Work() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="work" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-medium text-brand uppercase tracking-wider">My Work</span>
        <h2 className="text-3xl font-bold text-text-primary mt-2 mb-6">Recent Work</h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                'text-sm font-medium px-4 py-2 rounded-md transition-colors',
                activeFilter === cat
                  ? 'bg-brand text-white'
                  : 'bg-bg-primary text-text-secondary hover:text-brand border border-border',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="group relative h-64 rounded-lg overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <span className="text-sm text-gray-300">{item.category}</span>
                  <div className="flex gap-4 mt-2 text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                      <Share2 className="w-3 h-3" />
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {item.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" /> {item.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
