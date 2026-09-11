const posts = [
  {
    title: 'Benefits of Professional Office Cleaning',
    date: 'Aug 10, 2026',
    author: 'Admin',
    comments: 3,
    image: 'https://picsum.photos/seed/cleanslate-blog1/600/400',
  },
  {
    title: 'How to Maintain a Clean Kitchen',
    date: 'Jul 25, 2026',
    author: 'Editor',
    comments: 5,
    image: 'https://picsum.photos/seed/cleanslate-blog2/600/400',
  },
  {
    title: 'Window Cleaning Tips for Homeowners',
    date: 'Jul 12, 2026',
    author: 'Admin',
    comments: 2,
    image: 'https://picsum.photos/seed/cleanslate-blog3/600/400',
  },
]

export function Blog() {
  return (
    <section className="py-16 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-brand-heading text-3xl md:text-4xl font-bold">Latest News</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(({ title, date, author, comments, image }) => (
            <article
              key={title}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow group"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-brand-heading font-bold mb-2 group-hover:text-brand-primary transition-colors">
                  {title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-brand-body">
                  <span>{date}</span>
                  <span>·</span>
                  <span>{author}</span>
                  <span>·</span>
                  <span>{comments} comments</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
