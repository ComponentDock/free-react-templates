const posts = [
  {
    date: 'Feb 22, 2018',
    title: 'A Definitive Guide to the Best Dining',
    category: 'Activities',
    seed: 'voyager-blog-1',
  },
  {
    date: 'Feb 22, 2018',
    title: 'How These 5 People Found The Path to Their Dream Trip',
    category: 'Activities',
    seed: 'voyager-blog-2',
  },
  {
    date: 'Feb 22, 2018',
    title: 'Our Secret Island Boat Tour Is Just for You',
    category: 'Activities',
    seed: 'voyager-blog-3',
  },
]

export function RecentBlog() {
  return (
    <section id="blog" className="py-20" aria-label="Recent blog">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black">Recent Blog</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            We love to tell our successful far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Featured image */}
          <div className="lg:w-1/2">
            <div
              className="h-80 rounded-lg bg-cover bg-center lg:h-full"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/voyager-blog-featured/800/600)',
              }}
            />
          </div>

          {/* Blog entries */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            {posts.map((post) => (
              <a
                key={post.title}
                href="#"
                className="group flex gap-4 rounded-lg p-2 transition-colors hover:bg-gray-50"
              >
                <div
                  className="h-24 w-24 flex-shrink-0 rounded bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${post.seed}/200/200)`,
                  }}
                />
                <div className="flex flex-col justify-center">
                  <span className="mb-1 text-xs text-gray-400">{post.date}</span>
                  <h3 className="text-sm font-bold text-black transition-colors group-hover:text-primary-600">
                    {post.title}
                  </h3>
                  <span className="mt-1 text-xs text-primary-500">{post.category}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
