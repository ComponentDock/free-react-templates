const posts = [
  {
    title: 'Creative Projects',
    description:
      'Explore our latest creative work that pushes boundaries and redefines what digital design can achieve.',
    image: 'https://picsum.photos/seed/crux-blog1/600/400',
  },
  {
    title: 'Digital Solutions',
    description:
      'From strategy to execution, we build digital solutions that solve real business challenges.',
    image: 'https://picsum.photos/seed/crux-blog2/600/400',
  },
  {
    title: 'Growth Strategy',
    description:
      'Data-driven approaches to scaling your brand presence and reaching new audiences effectively.',
    image: 'https://picsum.photos/seed/crux-blog3/600/400',
  },
]

export function BlogCards() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group text-center">
              <div
                className="mb-4 h-48 w-full rounded bg-cover bg-center transition-transform group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${post.image})` }}
                role="img"
                aria-label={post.title}
              />
              <h3 className="mb-2 text-lg font-semibold text-ink">{post.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
