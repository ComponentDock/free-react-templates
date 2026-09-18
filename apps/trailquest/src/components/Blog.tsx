import { Calendar, User, MessageCircle } from 'lucide-react'

const posts = [
  {
    tag: 'Travel Tips',
    title: '10 Hidden Gems You Must Visit This Year',
    date: 'March 15, 2024',
    author: 'Travel Team',
    comments: 12,
    image: 'https://picsum.photos/seed/trailquest-blog-1/600/400',
  },
  {
    tag: 'Adventure',
    title: 'Guide to Sustainable Travel in 2024',
    date: 'March 10, 2024',
    author: 'Emma Wilson',
    comments: 8,
    image: 'https://picsum.photos/seed/trailquest-blog-2/600/400',
  },
  {
    tag: 'Destinations',
    title: 'Best Beach Resorts for Family Vacation',
    date: 'March 5, 2024',
    author: 'Michael Chen',
    comments: 15,
    image: 'https://picsum.photos/seed/trailquest-blog-3/600/400',
  },
]

export function Blog() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center font-display text-3xl md:text-4xl">Tips &amp; Articles</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-48">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                  {post.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold leading-tight">{post.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-xs text-text-light">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} />
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
