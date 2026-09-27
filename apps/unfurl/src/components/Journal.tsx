const posts = [
  {
    title: 'A Mountaineering Guide For Beginners',
    author: 'Joefrey',
    readTime: '5 mins read',
    seed: 'unfurl-blog-1',
  },
  {
    title: 'A Mountaineering Guide For Beginners',
    author: 'Joefrey',
    readTime: '5 mins read',
    seed: 'unfurl-blog-2',
  },
  {
    title: 'A Mountaineering Guide For Beginners',
    author: 'Joefrey',
    readTime: '5 mins read',
    seed: 'unfurl-blog-3',
  },
  {
    title: 'A Mountaineering Guide For Beginners',
    author: 'Joefrey',
    readTime: '5 mins read',
    seed: 'unfurl-blog-4',
  },
  {
    title: 'A Mountaineering Guide For Beginners',
    author: 'Joefrey',
    readTime: '5 mins read',
    seed: 'unfurl-blog-5',
  },
]

export default function Journal() {
  return (
    <section id="journal" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-12">
          My Journal
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <article
              key={post.seed}
              className="bg-dark-card rounded-lg overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mb-2 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
