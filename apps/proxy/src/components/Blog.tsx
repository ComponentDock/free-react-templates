const posts = [
  {
    date: 'February 26, 2024',
    title: 'How to Pick the Right Realtor',
    seed: 'proxy-blog-1',
  },
  {
    date: 'March 10, 2024',
    title: "First-Time Buyer's Guide to Houston",
    seed: 'proxy-blog-2',
  },
  {
    date: 'March 22, 2024',
    title: 'Market Trends: What to Expect This Spring',
    seed: 'proxy-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-[1600px] px-6">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-black md:text-4xl">
          Recent Blog Post
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Stay informed with market insights, buyer tips, and the latest neighborhood highlights
          from our team.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.seed}>
              <a href="#" className="mb-4 block overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="h-56 w-full object-cover transition duration-300 hover:scale-105"
                  loading="lazy"
                />
              </a>
              <span className="text-xs uppercase tracking-wider text-gray-400">{post.date}</span>
              <h3 className="mt-2 font-serif text-xl font-bold text-black">
                <a href="#" className="transition hover:text-sky-500">
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
