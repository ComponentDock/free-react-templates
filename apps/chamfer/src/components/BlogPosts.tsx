import { Calendar, User, ThumbsUp, MessageCircle } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/chamfer-blog-1/800/450',
    date: 'Jan 15, 2025',
    author: 'Jhon Sunsa',
    likes: 24,
    comments: 8,
    title: 'Top Interior Design Trends for 2025',
  },
  {
    image: 'https://picsum.photos/seed/chamfer-blog-2/800/450',
    date: 'Jan 10, 2025',
    author: 'Maria Lane',
    likes: 18,
    comments: 5,
    title: 'How to Choose the Right Color Palette',
  },
] as const

export function BlogPosts() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-dark-text md:text-4xl">
          Our Recent News
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-dark-navy px-4 py-2 text-sm font-bold text-white">
                  <Calendar className="mr-2 inline h-3 w-3" aria-hidden="true" />
                  {post.date}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-4 text-xs text-muted-gray">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="h-3 w-3" aria-hidden="true" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wider text-dark-text">
                  <a href="#blog" className="transition-colors hover:text-brand-red">
                    {post.title}
                  </a>
                </h3>
                <a
                  href="#blog"
                  className="mt-3 inline-block font-display text-sm font-semibold uppercase tracking-wider text-brand-red transition-colors hover:text-brand-red-dark"
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
