const POSTS = [
  {
    title: 'Beautiful Accommodation',
    description:
      'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.',
    image: 'https://picsum.photos/seed/sunlodge-blog1/600/400',
  },
  {
    title: 'Delicious Dining',
    description:
      'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.',
    image: 'https://picsum.photos/seed/sunlodge-blog2/600/400',
  },
  {
    title: 'Spa & Wellness',
    description:
      'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch.',
    image: 'https://picsum.photos/seed/sunlodge-blog3/600/400',
  },
] as const

export function BlogCards() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-ink">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
