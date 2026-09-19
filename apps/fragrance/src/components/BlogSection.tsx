const posts = [
  {
    title: 'How to Style Your Autumn Wardrobe',
    excerpt:
      'Discover the essential pieces that will keep you looking sharp through the cooler months.',
    author: 'Admin',
    comments: 3,
    seed: 'frag-blog-1',
  },
  {
    title: 'Top 10 Accessories for 2025',
    excerpt: 'From bags to belts, these accessories will elevate any outfit this season.',
    author: 'Admin',
    comments: 5,
    seed: 'frag-blog-2',
  },
  {
    title: 'The Rise of Sustainable Fashion',
    excerpt: 'Why eco-friendly fabrics and ethical production are reshaping the industry.',
    author: 'Admin',
    comments: 7,
    seed: 'frag-blog-3',
  },
]

export function BlogSection() {
  return (
    <section className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-body">Latest News</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.seed}
              className="group overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                className="h-[220px] w-full object-cover"
              />
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>By {post.author}</span>
                  <span>|</span>
                  <span>{post.comments} Comments</span>
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-body group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-3 inline-block font-heading text-sm font-medium text-brand group-hover:underline"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
