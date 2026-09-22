import { Play } from 'lucide-react'
import { Star } from './Star'

const POSTS = [
  {
    title: 'Top 10 Hidden Gems in the City',
    category: 'Travel',
    date: 'Mar 15, 2025',
    image: 'https://picsum.photos/seed/luxstay-blog-1/90/90',
  },
  {
    title: 'A Guide to Fine Dining Experiences',
    category: 'Food',
    date: 'Mar 10, 2025',
    image: 'https://picsum.photos/seed/luxstay-blog-2/90/90',
  },
  {
    title: 'Wellness Retreats: A Complete Guide',
    category: 'Wellness',
    date: 'Mar 5, 2025',
    image: 'https://picsum.photos/seed/luxstay-blog-3/90/90',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-2 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled />
            ))}
          </div>
          <h2 id="blog-heading" className="mb-3 font-heading text-3xl text-black">
            Recent Blog
          </h2>
          <p className="mx-auto max-w-md text-sm text-text-body">
            Stay updated with the latest stories and travel tips
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Video thumbnail */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/luxstay-video/800/450"
              alt="Featured video"
              className="h-[300px] w-full object-cover"
            />
            <button
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
              aria-label="Play video"
            >
              <Play size={24} className="ml-1 text-accent-orange" />
            </button>
          </div>

          {/* Blog posts */}
          <div className="flex flex-col justify-center gap-6">
            {POSTS.map((post) => (
              <div key={post.title} className="flex items-center gap-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[90px] w-[90px] flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="mb-1 text-xs text-text-body">{post.date}</p>
                  <h3 className="font-heading text-base font-medium text-black hover:text-brand-blue">
                    <a href="#">{post.title}</a>
                  </h3>
                  <span className="text-xs text-brand-blue">{post.category}</span>
                </div>
              </div>
            ))}
            <a href="#" className="text-sm font-medium text-brand-blue hover:underline">
              View all blog post →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
