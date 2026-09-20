import { Calendar, User, MessageCircle } from 'lucide-react'

export interface BlogProps {
  className?: string
}

const posts = [
  {
    image: 'https://picsum.photos/seed/blog-1/600/400',
    date: 'Jan 15, 2025',
    author: 'Admin',
    comments: 5,
    title: 'Top 10 Tips for Conference Attendees',
    excerpt:
      'Make the most of your conference experience with these essential tips for networking, learning, and engagement.',
  },
  {
    image: 'https://picsum.photos/seed/blog-2/600/400',
    date: 'Jan 12, 2025',
    author: 'Sarah',
    comments: 8,
    title: 'Why Developer Conferences Matter',
    excerpt:
      'Discover the lasting impact of developer conferences on career growth, community building, and technical knowledge.',
  },
  {
    image: 'https://picsum.photos/seed/blog-3/600/400',
    date: 'Jan 10, 2025',
    author: 'Mike',
    comments: 3,
    title: 'Behind the Scenes of Colloquium',
    excerpt:
      'A look at what goes into organizing a world-class developer conference from start to finish.',
  },
]

export function Blog({ className }: BlogProps) {
  return (
    <section id="blog" className={`bg-[#f8f9fa] py-20 md:py-28 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-[#ff2d9b]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Latest News
        </p>
        <h2
          className="mb-12 text-center text-3xl font-bold text-[#222] md:text-4xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          From Our Blog
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
              data-testid="blog-card"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {post.comments}
                  </span>
                </div>
                <h3
                  className="mb-2 text-lg font-bold text-[#222] hover:text-[#ff2d9b]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
