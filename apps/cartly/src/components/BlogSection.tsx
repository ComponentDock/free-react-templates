import { Calendar, User } from 'lucide-react'

const posts = [
  {
    title: 'Fashion is about to your personality',
    excerpt: 'Multiply sea night grass fourth十分之 days days said.',
    date: 'October 25, 2024',
    author: 'Admin',
    seed: 'cartly-blog1',
  },
  {
    title: 'Fashion is about to your personality',
    excerpt: 'Multiply sea night grass fourth十分之 days days said.',
    date: 'October 25, 2024',
    author: 'Admin',
    seed: 'cartly-blog2',
  },
  {
    title: 'Fashion is about to your personality',
    excerpt: 'Multiply sea night grass fourth十分之 days days said.',
    date: 'October 25, 2024',
    author: 'Admin',
    seed: 'cartly-blog3',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="bg-white pb-20 pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-neutral-800">
            Latest Blog
          </h2>
          <div className="mx-auto mt-4 h-px w-full bg-neutral-200" />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title + post.seed} className="group">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="py-5">
                <div className="mb-3 flex items-center gap-4 text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-3 w-3" aria-hidden="true" />
                    {post.author}
                  </span>
                </div>
                <h4 className="font-heading text-lg font-medium text-neutral-800 transition-colors group-hover:text-lime-400">
                  <a href="#">{post.title}</a>
                </h4>
                <p className="mt-2 text-sm text-neutral-500">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-xs font-medium uppercase text-neutral-800 transition-colors hover:text-lime-400"
                >
                  View More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
