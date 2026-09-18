import { Calendar, User, MessageSquare, ChevronRight } from 'lucide-react'

const posts = [
  {
    title: 'Modern Farming Techniques for 2025',
    excerpt:
      'Explore the latest farming techniques that are revolutionizing agriculture with sustainable practices.',
    image: 'https://picsum.photos/seed/blog1/400/300',
    date: 'Sep 10, 2025',
    author: 'Admin',
    comments: 5,
  },
  {
    title: 'Benefits of Organic Agriculture',
    excerpt:
      'Discover why organic agriculture is the future of farming and how it benefits both health and environment.',
    image: 'https://picsum.photos/seed/blog2/400/300',
    date: 'Sep 8, 2025',
    author: 'Admin',
    comments: 3,
  },
  {
    title: 'Tips for Growing Healthy Crops',
    excerpt:
      'Learn essential tips for growing healthy crops and maximizing your harvest yield this season.',
    image: 'https://picsum.photos/seed/blog3/400/300',
    date: 'Sep 5, 2025',
    author: 'Admin',
    comments: 8,
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Recent Post</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-lg bg-paper shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-mist">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {p.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} /> {p.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare size={12} /> {p.comments}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-mist">{p.excerpt}</p>
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  aria-label={`Read more about ${p.title}`}
                >
                  Read more <ChevronRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
