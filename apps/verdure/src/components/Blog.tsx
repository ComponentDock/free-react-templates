const posts = [
  {
    id: 1,
    seed: 'verdure-blog-1',
    date: 'Sept. 23, 2032',
    author: 'Admin',
    comments: '3',
    title: 'Spring Pruning Tips',
    excerpt:
      'Pruning in the early spring promotes healthy growth and keeps your garden looking vibrant throughout the season.',
  },
  {
    id: 2,
    seed: 'verdure-blog-2',
    date: 'Sept. 23, 2032',
    author: 'Admin',
    comments: '3',
    title: 'Spring Pruning Tips',
    excerpt:
      'Learn the secrets of maintaining a lush, green lawn with our expert tips on watering and fertilization schedules.',
  },
  {
    id: 3,
    seed: 'verdure-blog-3',
    date: 'Sept. 23, 2032',
    author: 'Admin',
    comments: '3',
    title: 'Spring Pruning Tips',
    excerpt:
      'Transform your outdoor space with creative landscaping ideas that add value and beauty to your home.',
  },
]

export function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-verdure-400 text-sm uppercase tracking-widest font-medium">
            Our Blog
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Recent Post</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="text-verdure-400">by {post.author}</span>
                  <span>{post.comments} Comments</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <button className="text-verdure-400 hover:text-verdure-500 font-medium text-sm transition-colors">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
