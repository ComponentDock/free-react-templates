const POSTS = [
  {
    title: 'How To Use Eye Shadow Like The Stars',
    date: '30 Aug 2024',
    image: 'https://picsum.photos/seed/vizier-blog1/600/400',
    featured: false,
  },
  {
    title: 'What Curling Irons Are The Best Ones',
    date: '30 Aug 2024',
    image: 'https://picsum.photos/seed/vizier-blog2/800/400',
    featured: true,
  },
  {
    title: 'Top 10 Fashion Trends This Season',
    date: '28 Aug 2024',
    image: 'https://picsum.photos/seed/vizier-blog3/400/300',
    featured: false,
  },
  {
    title: 'How To Save Money On Beauty Products',
    date: '25 Aug 2024',
    image: 'https://picsum.photos/seed/vizier-blog4/400/300',
    featured: false,
  },
]

export function Blog() {
  const featured = POSTS.find((p) => p.featured)
  const smallPosts = POSTS.filter((p) => !p.featured)

  return (
    <section className="bg-white py-20" id="blog" data-testid="blog">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Latest News</h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left: first small post */}
          {smallPosts[0] && (
            <div className="overflow-hidden rounded bg-gray-50">
              <img
                src={smallPosts[0].image}
                alt={smallPosts[0].title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <a
                  href="#"
                  className="mb-2 block text-lg font-bold text-heading hover:text-primary"
                >
                  {smallPosts[0].title}
                </a>
                <p className="text-sm text-gray-400">{smallPosts[0].date}</p>
              </div>
            </div>
          )}

          {/* Right column: featured + 2 small */}
          <div className="lg:col-span-2">
            {/* Featured */}
            {featured && (
              <div className="mb-6 overflow-hidden rounded bg-gray-50">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <a
                    href="#"
                    className="mb-2 block text-xl font-bold text-heading hover:text-primary"
                  >
                    {featured.title}
                  </a>
                  <p className="text-sm text-gray-400">{featured.date}</p>
                </div>
              </div>
            )}

            {/* 2 small side by side */}
            <div className="grid gap-6 sm:grid-cols-2">
              {smallPosts.slice(1).map((post) => (
                <div key={post.title} className="overflow-hidden rounded bg-gray-50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <a
                      href="#"
                      className="mb-1 block text-base font-bold text-heading hover:text-primary"
                    >
                      {post.title}
                    </a>
                    <p className="text-sm text-gray-400">{post.date}</p>
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
