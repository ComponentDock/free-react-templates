import { Calendar, User } from 'lucide-react'

const POSTS = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/news1/600/400',
    title: 'How to Choose the Right Property',
    author: 'John Smith',
    date: 'Sep 15, 2026',
    excerpt:
      'Finding the perfect property can be challenging. Here are some tips to help you make the right decision.',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/news2/600/400',
    title: 'Real Estate Market Trends 2026',
    author: 'Sarah Johnson',
    date: 'Sep 10, 2026',
    excerpt:
      'The real estate market is constantly evolving. Stay ahead with the latest trends and insights.',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/news3/600/400',
    title: 'Tips for First-Time Buyers',
    author: 'Mike Williams',
    date: 'Sep 5, 2026',
    excerpt:
      'Buying your first home is exciting but can be overwhelming. Here are essential tips to guide you.',
  },
]

export function LatestNews() {
  return (
    <section className="py-16 bg-gray-50" aria-label="Latest news">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-dark">Latest News</h2>
          <p className="mt-2 text-text-gray">Stay updated with our latest articles</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <article key={post.id} className="bg-white shadow-md overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-dark group-hover:text-primary transition">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 mt-3 text-xs text-text-gray">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                </div>
                <p className="mt-3 text-sm text-text-gray">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
