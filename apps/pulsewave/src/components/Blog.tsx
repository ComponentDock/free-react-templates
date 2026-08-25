const BLOG_POSTS = [
  {
    title: 'Explore The Best Restaurant in New York',
    author: 'Johan Stevenson',
    date: 'DEC. 12, 2024',
    image: 'https://picsum.photos/seed/pulsewave-b1/600/400',
  },
  {
    title: 'Digital Marketing Trends for 2024',
    author: 'Johan Stevenson',
    date: 'DEC. 10, 2024',
    image: 'https://picsum.photos/seed/pulsewave-b2/600/400',
  },
  {
    title: 'How to Build a Strong Brand Identity',
    author: 'Johan Stevenson',
    date: 'DEC. 08, 2024',
    image: 'https://picsum.photos/seed/pulsewave-b3/600/400',
  },
  {
    title: 'Creative Design Inspiration',
    author: 'Johan Stevenson',
    date: 'DEC. 05, 2024',
    image: 'https://picsum.photos/seed/pulsewave-b4/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-[88px]">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-dark">Recent Blog</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map(({ title, author, date, image }, i) => (
            <div key={i} className="group">
              <a href="#" className="block overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={title}
                  className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <div className="mt-4">
                <div className="mb-2 flex gap-4 text-xs text-text-muted">
                  <span>{date}</span>
                  <span>BY {author.toUpperCase()}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-dark transition-colors hover:text-brand">
                  <a href="#">{title}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
