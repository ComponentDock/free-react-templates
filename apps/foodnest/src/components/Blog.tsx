const posts = [
  {
    title: 'How To Cook Pasta?',
    date: 'April 22, 2018',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'foodnest-blog1',
  },
  {
    title: 'Best Recipes for Summer',
    date: 'May 10, 2018',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'foodnest-blog2',
  },
] as const

export function Blog() {
  return (
    <section id="news" className="relative bg-paper py-16">
      {/* Top slant */}
      <div
        className="absolute top-0 left-0 right-0 -mt-1 h-12 bg-white"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-heading">Blog</h2>
        <p className="text-sm text-mist">Our Blog</p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
            <img
              src={`https://picsum.photos/seed/${post.image}/800/400`}
              alt={post.title}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="mb-2 text-lg font-bold text-heading">{post.title}</h3>
              <p className="mb-3 text-xs text-mist">{post.date}</p>
              <p className="mb-4 text-sm text-mist">{post.excerpt}</p>
              <a
                href="#"
                className="inline-block rounded bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
