import { Calendar, MessageSquare } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'How To Choose The Right Lock For Your Home',
    date: 'December 15, 2025',
    comments: 5,
  },
  {
    id: 2,
    title: 'Top 5 Security Tips For Small Businesses',
    date: 'December 12, 2025',
    comments: 3,
  },
  {
    id: 3,
    title: 'Smart Locks vs Traditional Locks: A Comparison',
    date: 'December 8, 2025',
    comments: 7,
  },
  {
    id: 4,
    title: 'Emergency Locksmith: What To Do When Locked Out',
    date: 'December 3, 2025',
    comments: 2,
  },
] as const

export function Blog() {
  return (
    <section id="news" aria-label="Latest posts" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-400">
              Latest posts
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase text-teal sm:text-4xl">
              Tips &amp; tricks
            </h2>
          </div>
          <a
            href="#news"
            className="rounded border-2 border-teal px-6 py-2 text-sm font-bold uppercase text-teal transition-colors hover:bg-teal hover:text-white"
          >
            View all
          </a>
        </div>

        {/* Blog cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/keycraft-blog-${post.id}/600/400`}
                  alt={post.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded bg-primary-400 px-3 py-1 text-xs font-bold uppercase text-navy">
                  Security
                </span>
              </div>
              <div className="p-6">
                <a
                  href="#news"
                  className="font-display text-lg font-bold text-teal transition-colors hover:text-primary-400"
                >
                  {post.title}
                </a>
                <div className="mt-4 flex items-center gap-4 text-sm text-smoke">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    {post.comments}
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
