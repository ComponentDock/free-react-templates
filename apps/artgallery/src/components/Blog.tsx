const POSTS = [
  {
    image: 'https://picsum.photos/seed/artgallery-blog-1/600/400',
    title: 'Exploring Modern Art Movements',
    excerpt:
      'From Impressionism to Abstract Expressionism, discover the movements that shaped the art world as we know it today.',
    date: 'Feb 15, 2025',
  },
  {
    image: 'https://picsum.photos/seed/artgallery-blog-2/600/400',
    title: 'Behind the Scenes: Curating an Exhibition',
    excerpt:
      'Our curators share the process of selecting, arranging, and presenting artworks for maximum impact.',
    date: 'Feb 10, 2025',
  },
  {
    image: 'https://picsum.photos/seed/artgallery-blog-3/600/400',
    title: 'Top 10 Must-See Artworks This Season',
    excerpt:
      "Our expert team picks the must-see pieces that define this season's exhibitions at ArtGallery.",
    date: 'Feb 5, 2025',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-navy">
          <span className="font-[family-name:var(--font-playfair)]">Latest News</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="mb-2 text-xs text-muted">{post.date}</p>
                <h3 className="mb-2 text-lg font-semibold text-navy">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <a href="#" className="text-sm font-semibold text-accent hover:text-accent-dark">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
