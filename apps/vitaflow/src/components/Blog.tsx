import { MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'The Top 10 Benefits of Regular Exercise',
    date: 'January 30, 2025',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/vitaflow-blog1/600/400',
  },
  {
    title: 'Healthy Eating Habits for a Better Lifestyle',
    date: 'January 28, 2025',
    author: 'Admin',
    comments: 5,
    image: 'https://picsum.photos/seed/vitaflow-blog2/600/400',
  },
  {
    title: 'How to Stay Motivated on Your Fitness Journey',
    date: 'January 25, 2025',
    author: 'Admin',
    comments: 2,
    image: 'https://picsum.photos/seed/vitaflow-blog3/600/400',
  },
]

export function Blog() {
  return (
    <section className="py-16" id="blog">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-2xl font-bold text-ink">Latest news from our blog</h2>
          <p className="text-sm font-bold uppercase tracking-widest text-primary-400">
            News & Blog
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="overflow-hidden rounded">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <div className="mb-3 flex items-center gap-4 text-xs text-smoke">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {post.comments}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-ink">
                  <a href="#" className="text-ink no-underline hover:text-primary-400">
                    {post.title}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
