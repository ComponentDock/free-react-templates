const blogs = [
  {
    id: 1,
    title: 'Here are the trends I see coming this fall',
    date: 'Dec 01, 2024',
    seed: 'shoplane-blog1',
  },
  {
    id: 2,
    title: 'Here are the trends I see coming this fall',
    date: 'Dec 01, 2024',
    seed: 'shoplane-blog2',
  },
  {
    id: 3,
    title: 'Here are the trends I see coming this fall',
    date: 'Dec 01, 2024',
    seed: 'shoplane-blog3',
  },
]

export function LatestBlogs() {
  return (
    <section id="blog" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Latest Blogs</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href="#blog"
              className="group relative flex h-72 items-end overflow-hidden rounded bg-cover bg-center transition-transform hover:scale-[1.02]"
              style={{ backgroundImage: `url(https://picsum.photos/seed/${blog.seed}/600/400)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 w-full p-6 text-center">
                <h4 className="mb-2 text-lg font-semibold text-white">{blog.title}</h4>
                <span className="text-xs text-white/70">by admin | {blog.date}</span>
                <span className="mt-2 block text-sm font-medium text-coral-400 transition-colors group-hover:text-coral-300">
                  Read more
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
