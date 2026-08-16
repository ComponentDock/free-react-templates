const posts = [
  {
    title: 'A Message of Hope for Our Community',
    image: 'https://picsum.photos/seed/vesper-18/700/500',
    excerpt:
      'In times of uncertainty, the gospel reminds us that hope is not a feeling but a person — and He is with us always.',
  },
  {
    title: 'Finding Faith in Daily Life',
    image: 'https://picsum.photos/seed/vesper-19/700/500',
    excerpt:
      'Faith is not only for Sundays. Small, faithful habits shape a life that glorifies God every day of the week.',
  },
  {
    title: 'The Power of Gathering Together',
    image: 'https://picsum.photos/seed/vesper-20/700/500',
    excerpt:
      'When the church gathers, God moves. Discover why weekly fellowship matters for your spiritual growth.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-section-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Read the Latest Blog
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={post.image}
                alt=""
                aria-hidden="true"
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold leading-snug text-gray-900">
                  <a href="#blog" className="transition-colors hover:text-gold-dark">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-gold-dark transition-colors hover:text-gold"
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
