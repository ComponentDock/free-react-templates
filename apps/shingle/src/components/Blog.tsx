const posts = [
  {
    title: 'How to Choose the Right Roofing Material',
    author: 'John Doe',
    date: '15 March 2024',
    seed: 'shingle-blog-1',
  },
  {
    title: 'Signs Your Roof Needs Professional Attention',
    author: 'Jane Smith',
    date: '28 February 2024',
    seed: 'shingle-blog-2',
  },
  {
    title: 'The Benefits of Regular Roof Maintenance',
    author: 'Mike Wilson',
    date: '10 January 2024',
    seed: 'shingle-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold text-ink sm:text-3xl">
          Latest News from Our Blog
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.seed}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/375`}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-mist">
                  <img
                    src={`https://picsum.photos/seed/${post.seed}-author/40/40`}
                    alt={post.author}
                    className="h-8 w-8 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <span className="block font-medium text-ink">{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink transition-colors group-hover:text-brand">
                  <a href="#">{post.title}</a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
