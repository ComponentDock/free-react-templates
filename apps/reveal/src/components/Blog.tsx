const posts = [
  {
    title: 'A Mountaineering Guide For Beginners',
    author: 'Joefrey',
    readTime: '5 mins read',
    seed: 'reveal-blog-1',
    large: true,
  },
  {
    title: 'Exploring the Swiss Alps',
    author: 'Joefrey',
    readTime: '4 mins read',
    seed: 'reveal-blog-2',
    large: false,
  },
  {
    title: 'Essential Camping Gear',
    author: 'Joefrey',
    readTime: '3 mins read',
    seed: 'reveal-blog-3',
    large: false,
  },
  {
    title: 'Mountain Summit at Sunrise',
    author: 'Joefrey',
    readTime: '6 mins read',
    seed: 'reveal-blog-4',
    large: false,
  },
  {
    title: 'Outdoor Adventure Photography',
    author: 'Joefrey',
    readTime: '4 mins read',
    seed: 'reveal-blog-5',
    large: false,
  },
]

export function Blog() {
  return (
    <section id="journal" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">My Journal</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {/* First row: large + small */}
          <div className="group relative overflow-hidden lg:col-span-8">
            <img
              src={`https://picsum.photos/seed/${posts[0]!.seed}/800/400`}
              alt={posts[0]!.title}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-80"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-lg font-bold text-white">{posts[0]!.title}</h3>
              <p className="text-sm text-white/60">
                By {posts[0]!.author} · {posts[0]!.readTime}
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden lg:col-span-4">
            <img
              src={`https://picsum.photos/seed/${posts[1]!.seed}/400/400`}
              alt={posts[1]!.title}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-80"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-lg font-bold text-white">{posts[1]!.title}</h3>
              <p className="text-sm text-white/60">
                By {posts[1]!.author} · {posts[1]!.readTime}
              </p>
            </div>
          </div>

          {/* Second row: 3 small */}
          {posts.slice(2).map((post) => (
            <div key={post.seed} className="group relative overflow-hidden lg:col-span-4">
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/300`}
                alt={post.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-lg font-bold text-white">{post.title}</h3>
                <p className="text-sm text-white/60">
                  By {post.author} · {post.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
