import { Calendar, MessageSquare, ArrowRight } from 'lucide-react'

const BLOG_POSTS = [
  {
    title: 'Navigating Tax Season: A Complete Guide',
    date: 'January 15, 2025',
    author: 'Admin',
    comments: 5,
    image: 'https://picsum.photos/seed/tally-blog1/400/250',
  },
  {
    title: 'Understanding Financial Statements',
    date: 'January 22, 2025',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/tally-blog2/400/250',
  },
  {
    title: 'Small Business Funding Options',
    date: 'January 29, 2025',
    author: 'Admin',
    comments: 8,
    image: 'https://picsum.photos/seed/tally-blog3/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-light py-20" aria-label="Blog">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Latest Blog
          </p>
          <h2 className="text-3xl font-bold text-dark md:text-4xl">From The Blog</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={post.image}
                alt={`Blog post: ${post.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare size={14} />
                    {post.comments} Comments
                  </span>
                </div>
                <h3 className="mb-2 font-bold text-dark">{post.title}</h3>
                <p className="mb-3 text-sm text-gray-500">By {post.author}</p>
                <a
                  href="#blog"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                >
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
