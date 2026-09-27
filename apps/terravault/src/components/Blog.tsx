const posts = [
  {
    image: 'https://picsum.photos/seed/terravault-blog-1/400/280',
    date: '15 Sep, 2024',
    title: 'How To Choose The Right Property For Your Family',
    description:
      'Finding the perfect home for your family involves many factors including location, size, and budget considerations.',
  },
  {
    image: 'https://picsum.photos/seed/terravault-blog-2/400/280',
    date: '12 Sep, 2024',
    title: 'Real Estate Market Trends In 2024',
    description:
      'Discover the latest trends shaping the real estate market and what buyers and sellers should know.',
  },
  {
    image: 'https://picsum.photos/seed/terravault-blog-3/400/280',
    date: '08 Sep, 2024',
    title: 'Tips For First-Time Home Buyers',
    description:
      'Essential advice for navigating the home buying process and making informed decisions.',
  },
]

export function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-[#2cbdb8]">From Our Blog</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#19191a]">News Latest</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#2cbdb8]" />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <span className="mb-3 inline-block rounded bg-[#2cbdb8] px-3 py-1 text-xs font-semibold text-white">
                  {post.date}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-[#19191a]">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
