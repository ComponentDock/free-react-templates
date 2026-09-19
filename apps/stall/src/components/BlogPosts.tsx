const posts = [
  {
    id: 1,
    title: 'Top 10 Summer Fashion Trends',
    image: 'stall-blog-1',
    author: 'Sarah Johnson',
    date: 'Sep 15, 2026',
    category: 'Fashion',
    desc: 'Discover the hottest fashion trends this summer season.',
  },
  {
    id: 2,
    title: 'How to Style Your Accessories',
    image: 'stall-blog-2',
    author: 'Emily Davis',
    date: 'Sep 12, 2026',
    category: 'Style',
    desc: 'Expert tips on accessorizing for any occasion.',
  },
  {
    id: 3,
    title: 'The Art of Smart Shopping',
    image: 'stall-blog-3',
    author: 'Michael Chen',
    date: 'Sep 10, 2026',
    category: 'Tips',
    desc: 'Save money while still getting the best quality products.',
  },
]

export function BlogPosts() {
  return (
    <section id="blog" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black uppercase tracking-wide text-heading">
          Blog Posts
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.id}
              className="border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${p.image}/400/250`}
                alt={p.title}
                className="h-48 w-full object-cover"
                width={400}
                height={250}
              />
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-body">
                  <span>{p.author}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                  <span>·</span>
                  <span className="font-semibold text-brand">{p.category}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-heading">{p.title}</h3>
                <p className="mt-2 text-sm text-body">{p.desc}</p>
                <a
                  href="#continue"
                  className="mt-4 inline-block text-sm font-bold uppercase text-brand hover:underline"
                >
                  Continue Reading
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
