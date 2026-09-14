const posts = [
  {
    title: 'Huge cavity in Antarctic glacier signals rapid ice loss',
    author: 'Admin Post',
    date: 'Jan 10, 2024',
    img: 'https://picsum.photos/seed/crave-blog1/400/250',
  },
  {
    title: 'Researcher unearths ancient recipe in the desert',
    author: 'Admin Post',
    date: 'Jan 10, 2024',
    img: 'https://picsum.photos/seed/crave-blog2/400/250',
  },
  {
    title: 'High-protein rice brings value and nutrition to the table',
    author: 'Admin Post',
    date: 'Jan 10, 2024',
    img: 'https://picsum.photos/seed/crave-blog3/400/250',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h4 className="mb-3 font-heading text-2xl font-semibold text-brand">Our Blog</h4>
        <h2 className="mb-12 font-heading text-3xl font-bold text-heading sm:text-4xl lg:text-5xl">
          Latest food and recipe news
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-cream transition-shadow hover:shadow-xl"
            >
              <img
                src={post.img}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <ul className="mb-3 flex gap-3 text-sm text-gray-400">
                  <li>{post.author}</li>
                  <li>{post.date}</li>
                </ul>
                <h3 className="font-heading text-lg font-bold text-heading transition-colors group-hover:text-brand">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
