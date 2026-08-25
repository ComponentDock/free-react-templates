import { Calendar, User, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Best Hotel Near Beach in Hawaii',
    date: 'Jan 15, 2025',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/solace-blog1/600/400',
  },
  {
    title: 'Luxury Suites with Ocean View',
    date: 'Feb 20, 2025',
    author: 'Admin',
    comments: 5,
    image: 'https://picsum.photos/seed/solace-blog2/600/400',
  },
  {
    title: 'Romantic Getaway Packages',
    date: 'Mar 10, 2025',
    author: 'Admin',
    comments: 2,
    image: 'https://picsum.photos/seed/solace-blog3/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Recent Posts
        </p>
        <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">Recent Blog</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map(({ title, date, author, comments, image }) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} /> {author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {comments}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-bold text-ink">{title}</h3>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
