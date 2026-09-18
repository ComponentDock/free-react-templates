import { Calendar, User, MessageSquare } from 'lucide-react'

const posts = [
  {
    title: 'Tips on how to hire a house cleaning service',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    date: 'Jan 15, 2025',
    author: 'Admin',
    comments: 12,
    seed: 'tidywash-blog-1',
  },
  {
    title: 'How to keep your office clean and organized',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    date: 'Feb 22, 2025',
    author: 'Admin',
    comments: 8,
    seed: 'tidywash-blog-2',
  },
  {
    title: 'Benefits of professional carpet cleaning',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    date: 'Mar 10, 2025',
    author: 'Admin',
    comments: 5,
    seed: 'tidywash-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary-400">
          Our Blog
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ink">Recent Posts</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/300`}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-smoke">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-ink">
                  <a href="#" className="transition-colors hover:text-primary-400">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
