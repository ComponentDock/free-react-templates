const posts = [
  {
    title: 'Spring Trends to Watch',
    date: 'Mar 12, 2026',
    excerpt: 'From pastel palettes to bold prints, here is what is trending this season.',
    seed: 'silhouette-blog1',
  },
  {
    title: 'How to Build a Capsule Wardrobe',
    date: 'Feb 28, 2026',
    excerpt: 'Less is more. Learn how to create a versatile wardrobe with fewer pieces.',
    seed: 'silhouette-blog2',
  },
  {
    title: 'Behind the Seams',
    date: 'Feb 14, 2026',
    excerpt: 'A look at our design process and the craftsmanship behind every garment.',
    seed: 'silhouette-blog3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold">From the Journal</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-gray-500">
          Style inspiration and updates
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={600}
                  height={400}
                />
              </div>
              <time className="text-xs text-gray-400">{post.date}</time>
              <h3 className="mt-1 font-bold">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
