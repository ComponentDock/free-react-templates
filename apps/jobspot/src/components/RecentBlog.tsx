import { Calendar, User, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'How to Get Hired in Tech',
    excerpt: 'Tips and tricks to land your dream job in the technology sector.',
    date: 'Aug 20, 2026',
    author: 'Admin',
    comments: 3,
    img: 'https://picsum.photos/seed/jobspot-blog-1/400/300',
  },
  {
    title: 'Remote Work Best Practices',
    excerpt: 'Stay productive while working from anywhere in the world.',
    date: 'Aug 18, 2026',
    author: 'Admin',
    comments: 5,
    img: 'https://picsum.photos/seed/jobspot-blog-2/400/300',
  },
  {
    title: 'Building Your Portfolio',
    excerpt: 'Showcase your skills with a standout developer portfolio.',
    date: 'Aug 15, 2026',
    author: 'Admin',
    comments: 2,
    img: 'https://picsum.photos/seed/jobspot-blog-3/400/300',
  },
  {
    title: 'Salary Negotiation Guide',
    excerpt: 'Learn how to negotiate the salary you deserve.',
    date: 'Aug 12, 2026',
    author: 'Admin',
    comments: 8,
    img: 'https://picsum.photos/seed/jobspot-blog-4/400/300',
  },
]

export function RecentBlog() {
  return (
    <section className="bg-brand-surface py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-brand">
            Blog
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Recent Blog</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {posts.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <div className="mb-3 flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {p.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} /> {p.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {p.comments}
                  </span>
                </div>
                <h3 className="mb-2 text-sm font-bold text-gray-900">
                  <a href="#" className="hover:text-brand">
                    {p.title}
                  </a>
                </h3>
                <p className="text-xs text-gray-500">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
