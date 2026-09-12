import { Calendar, User, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Even the all-powerful Pointing has no control about',
    date: 'July 01, 2024',
    author: 'Admin',
    comments: 19,
    image: 'vigor-blog-1',
  },
  {
    title: 'The Big Oxmox advised her not to do because',
    date: 'July 01, 2024',
    author: 'Admin',
    comments: 12,
    image: 'vigor-blog-2',
  },
  {
    title: 'Far far away behind the word mountains',
    date: 'July 01, 2024',
    author: 'Admin',
    comments: 8,
    image: 'vigor-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-400">
            Recent From Blog
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map(({ title, date, author, comments, image }) => (
            <article key={title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${image}/600/400`}
                alt={title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">{title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" /> {comments}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
