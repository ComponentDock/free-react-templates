const posts = [
  {
    title: 'The Evolution of Festival Sound Systems',
    author: 'DJ Nexus',
    comments: 12,
    date: 'Mar 15',
    description:
      'From massive Funktion-One stacks to cutting-edge immersive audio, festival sound design has come a long way in the last decade.',
    image: 'https://picsum.photos/seed/encoremix-news-1/800/500',
  },
  {
    title: 'Top 10 Headliners to Watch This Year',
    author: 'Music Insider',
    comments: 28,
    date: 'Mar 10',
    description:
      'Breaking artists who are set to dominate main stages worldwide. From bedroom producers to arena-filling headliners.',
    image: 'https://picsum.photos/seed/encoremix-news-2/800/500',
  },
]

export function LastNews() {
  return (
    <section id="blog" className="bg-brand-dark py-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-2 text-center text-sm font-medium tracking-widest text-brand-subtitle uppercase">
          Just the best
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Our Last News
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white shadow-[10px_40px_115px_27px_rgba(0,0,0,0.1)]"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <span className="gradient-bg absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-brand-dark">
                  {post.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-brand-heading">
                  <a href="#" className="transition-colors hover:text-brand-cyan">
                    {post.title}
                  </a>
                </h3>
                <p className="mb-3 text-xs text-brand-meta">
                  {post.author} • {post.comments} Comments
                </p>
                <p className="text-sm leading-relaxed text-brand-meta">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
