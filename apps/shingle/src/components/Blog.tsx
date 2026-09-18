const posts = [
  {
    seed: 'shingle-blog-1',
    title: 'How to Choose the Right Roofing Material',
    date: '24 February 2024',
    author: 'John Doe',
  },
  {
    seed: 'shingle-blog-2',
    title: 'Signs Your Roof Needs Immediate Repair',
    date: '18 February 2024',
    author: 'Jane Smith',
  },
  {
    seed: 'shingle-blog-3',
    title: 'Benefits of Regular Roof Maintenance',
    date: '10 February 2024',
    author: 'Mike Wilson',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Latest News from Our Blog
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded border border-gray-200 shadow-sm"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={post.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <p className="mb-2 text-xs text-gray-400">
                  Posted by {post.author} · {post.date}
                </p>
                <h3 className="mb-3 font-bold text-gray-900">{post.title}</h3>
                <a href="#" className="text-sm font-semibold text-gold-400 hover:underline">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
