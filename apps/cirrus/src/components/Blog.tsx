import { MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Cloud Computing Trends to Watch in 2026',
    date: 'May 17, 2026',
    author: 'Admin',
    comments: 3,
    img: 'https://picsum.photos/seed/cirrus-blog-1/600/275',
  },
  {
    title: 'How to Optimize Your Cloud Storage Costs',
    date: 'Apr 28, 2026',
    author: 'Admin',
    comments: 5,
    img: 'https://picsum.photos/seed/cirrus-blog-2/600/275',
  },
  {
    title: 'Building Resilient Applications with Cloud Services',
    date: 'Mar 15, 2026',
    author: 'Admin',
    comments: 2,
    img: 'https://picsum.photos/seed/cirrus-blog-3/600/275',
  },
]

export function Blog() {
  return (
    <section className="bg-panel py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-heading">Recent Blog</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img src={post.img} alt={post.title} className="h-[275px] w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted">
                  <span>{post.date}</span>
                  <span>|</span>
                  <span>{post.author}</span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    {post.comments}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-heading">
                  <a href="#" className="hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <a href="#" className="text-sm font-medium text-brand hover:underline">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
