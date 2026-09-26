const posts = [
  {
    title: 'Google saying pseudo-telephoto is more important',
    date: 'October 18, 2024',
    author: 'John Freeman',
    role: 'Thinker & Designer',
    seed: 'reign-blog-1',
  },
  {
    title: 'The future of creative design in a digital world',
    date: 'October 12, 2024',
    author: 'Maria Santos',
    role: 'Art Director',
    seed: 'reign-blog-2',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {posts.map(({ title, date, author, role, seed }) => (
            <article key={title}>
              <img
                src={`https://picsum.photos/seed/${seed}/800/400`}
                alt={title}
                loading="lazy"
                className="mb-4 h-60 w-full rounded-lg object-cover"
              />
              <span className="mb-2 block text-sm text-text-body">{date}</span>
              <h3 className="mb-3 text-xl font-semibold">
                <a href="#" className="transition-colors hover:text-brand">
                  {title}
                </a>
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${seed}-author/40/40`}
                  alt={author}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <span className="block text-sm font-medium">{author}</span>
                  <span className="text-xs text-text-body">{role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
