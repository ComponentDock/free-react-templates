import { MessageCircle } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/lounge-blog-1/400/250',
    title: 'Discover the Best Hidden Beaches',
    date: 'September 15, 2026',
    author: 'Admin',
    comments: 12,
  },
  {
    image: 'https://picsum.photos/seed/lounge-blog-2/400/250',
    title: "A Foodie's Guide to Coastal Cuisine",
    date: 'September 10, 2026',
    author: 'Admin',
    comments: 8,
  },
  {
    image: 'https://picsum.photos/seed/lounge-blog-3/400/250',
    title: 'Planning Your Perfect Beach Vacation',
    date: 'September 5, 2026',
    author: 'Admin',
    comments: 15,
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-lounge-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">Blog</p>
          <h2 className="font-heading text-3xl font-bold text-lounge-900 md:text-4xl">
            Recent Blog
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="mb-2 font-heading text-lg font-bold text-lounge-900">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-lounge-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                  <span className="ml-auto flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
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
