import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'My New Photography Has Been Featured in Forbes',
    date: 'Jan 18, 2024',
    author: 'Ben Jones',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?',
    image: 'https://picsum.photos/seed/lumier-blog1/500/300',
  },
  {
    id: 2,
    title: 'Behind the Lens: A Journey Through Nature',
    date: 'Feb 5, 2024',
    author: 'Ben Jones',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?',
    image: 'https://picsum.photos/seed/lumier-blog2/500/300',
  },
  {
    id: 3,
    title: 'Mastering Light: Tips for Portrait Photography',
    date: 'Mar 12, 2024',
    author: 'Ben Jones',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?',
    image: 'https://picsum.photos/seed/lumier-blog3/500/300',
  },
  {
    id: 4,
    title: 'Urban Explorations: City Lights at Night',
    date: 'Apr 20, 2024',
    author: 'Ben Jones',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid doloremque qui, saepe alias eum?',
    image: 'https://picsum.photos/seed/lumier-blog4/500/300',
  },
]

const POSTS_PER_PAGE = 2

export function Blog() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const visiblePosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  return (
    <section id="section-blog" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-4xl font-bold uppercase tracking-wider mb-12 font-heading">
          Blog
        </h2>

        <div className="space-y-8">
          {visiblePosts.map((post) => (
            <article key={post.id} className="flex flex-col md:flex-row gap-6">
              <div className="shrink-0 md:w-[250px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 md:h-auto object-cover rounded"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  <a href="#" className="text-white hover:text-brand transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="text-muted text-sm mb-3">
                  Posted by {post.author} on{' '}
                  <a href="#" className="text-muted hover:text-brand transition-colors">
                    {post.date}
                  </a>
                </p>
                <p className="text-white/60">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white disabled:opacity-30 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors ${
                p === page
                  ? 'bg-brand text-white'
                  : 'text-white/60 hover:bg-brand/50 hover:text-white'
              }`}
              aria-label={`Page ${p}`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white disabled:opacity-30 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
