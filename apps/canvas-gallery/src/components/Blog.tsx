const posts = [
  { title: 'How To Use Eye Shadow Like The Stars', date: '30 Aug 2018', seed: 'blog-1' },
  {
    title: 'What Curling Irons Are The Best Ones',
    date: '30 Aug 2018',
    seed: 'blog-2',
    featured: true,
  },
  { title: 'What Curling Irons Are The Best Ones', date: '30 Aug 2018', seed: 'blog-3' },
  { title: 'How To Save Money On Beauty Products', date: '30 Aug 2018', seed: 'blog-4' },
]

export function Blog() {
  const first = posts[0]!
  const featured = posts[1]!
  const small = posts.slice(2)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-text-dark">Latest News</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* First post (smaller, left column) */}
          <div className="overflow-hidden rounded-lg bg-white shadow-sm">
            <img
              src={`https://picsum.photos/seed/${first.seed}/600/400`}
              alt={first.title}
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <a href="#" className="text-base font-semibold text-text-dark hover:text-brand">
                {first.title}
              </a>
              <span className="mt-1 block text-xs text-text-muted">{first.date}</span>
            </div>
          </div>

          {/* Right column — featured + 2 smaller */}
          <div className="lg:col-span-2 grid gap-6">
            {/* Featured post */}
            <div className="overflow-hidden rounded-lg bg-white shadow-sm sm:flex">
              <img
                src={`https://picsum.photos/seed/${featured.seed}/800/400`}
                alt={featured.title}
                className="aspect-video w-full object-cover sm:w-1/2"
                loading="lazy"
              />
              <div className="flex flex-col justify-center p-4">
                <a href="#" className="text-base font-semibold text-text-dark hover:text-brand">
                  {featured.title}
                </a>
                <span className="mt-1 text-xs text-text-muted">{featured.date}</span>
              </div>
            </div>

            {/* Two smaller posts */}
            <div className="grid gap-6 sm:grid-cols-2">
              {small.map((post) => (
                <div key={post.seed} className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}/600/300`}
                    alt={post.title}
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <a href="#" className="text-sm font-semibold text-text-dark hover:text-brand">
                      {post.title}
                    </a>
                    <span className="mt-1 block text-xs text-text-muted">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
