const POSTS = [
  {
    title: 'Portable Fashion for Women',
    image: 'https://picsum.photos/seed/blog1/600/400',
    author: 'Mark Wiens',
    date: '13th Dec',
    comments: 15,
    likes: 4,
  },
  {
    title: 'Summer Wear Is Coming',
    image: 'https://picsum.photos/seed/blog2/600/400',
    author: 'Mark Wiens',
    date: '13th Dec',
    comments: 15,
    likes: 4,
  },
  {
    title: 'Health Tips for the Family',
    image: 'https://picsum.photos/seed/blog3/600/400',
    author: 'Mark Wiens',
    date: '13th Dec',
    comments: 15,
    likes: 4,
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-ink">Our Recent Blogs</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-md"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h4 className="text-lg font-bold text-ink">{p.title}</h4>
                <p className="mt-2 text-sm text-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-brand">
                  <span>{p.author}</span>
                </div>
                <div className="mt-2 flex items-center gap-4 text-xs text-body">
                  <span>{p.date}</span>
                  <span>{p.comments} Comments</span>
                  <span>{p.likes} Likes</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
