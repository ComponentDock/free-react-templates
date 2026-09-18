import { MessageCircle } from 'lucide-react'

const posts = [
  {
    date: 'June 29, 2024',
    author: 'Admin',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    comments: 3,
    seed: 'derrick-blog-1',
  },
  {
    date: 'June 29, 2024',
    author: 'Admin',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    comments: 3,
    seed: 'derrick-blog-2',
  },
  {
    date: 'June 29, 2024',
    author: 'Admin',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    comments: 3,
    seed: 'derrick-blog-3',
  },
]

interface BlogProps {
  className?: string
}

export function Blog({ className }: BlogProps) {
  return (
    <section id="blog" className={`py-20 ${className ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.seed}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h3>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-brand-500 text-sm hover:underline">
                    Read more
                  </a>
                  <span className="text-gray-500 text-sm flex items-center">
                    <MessageCircle size={14} className="mr-1" />
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
