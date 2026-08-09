const posts = [
  {
    title: 'Paris Fashion Week',
    image: 'https://picsum.photos/seed/haute-blog-1/800/600',
    excerpt:
      'Front-row notes from the spring collections — the silhouettes, the fabrics, and the moments everyone will be talking about next season.',
  },
  {
    title: 'About Our Fashion App',
    image: 'https://picsum.photos/seed/haute-blog-2/800/600',
    excerpt:
      'Haute brings the lookbook to your pocket: daily edits, one-tap styling, and the pieces our editors are wearing right now.',
  },
  {
    title: 'Simple Blog Post',
    image: 'https://picsum.photos/seed/haute-blog-3/800/600',
    excerpt:
      'Five effortless styling rules that make any wardrobe work harder — starting with the one item worth investing in this season.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24 transition-colors lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl dark:text-white">
          Recent Posts
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title}>
              <div className="relative">
                <img src={post.image} alt="" className="aspect-[4/3] w-full object-cover" />
                <div className="absolute -left-4 -top-4 flex h-[77px] w-[77px] flex-col items-center justify-center border-[3px] border-ink bg-white">
                  <span className="font-display text-2xl font-bold leading-none text-ink">20</span>
                  <span className="text-[11px] uppercase tracking-wide text-ink">Jan</span>
                </div>
              </div>
              <div className="relative z-10 -mt-12 ml-5 mr-5 bg-white px-6 pb-2 pt-6 dark:bg-gray-900">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand">
                  Fashion, Event, Lifestyle
                </p>
                <h3 className="mt-2">
                  <a
                    href="#blog"
                    className="font-display text-2xl font-semibold leading-snug text-ink transition-colors hover:text-brand dark:text-white"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
