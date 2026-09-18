const posts = [
  {
    title: 'How to find the best real estate deals',
    date: 'Oct. 21, 2020',
    author: 'Admin',
    comments: 3,
    img: 'domicile-blog1',
  },
  {
    title: 'Tips for first-time home buyers',
    date: 'Oct. 21, 2020',
    author: 'Admin',
    comments: 5,
    img: 'domicile-blog2',
  },
  {
    title: 'Understanding property market trends',
    date: 'Oct. 21, 2020',
    author: 'Admin',
    comments: 2,
    img: 'domicile-blog3',
  },
]
export function Blog() {
  return (
    <section className="py-16" id="blog">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading">Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${p.img}/600/400)` }}
              />
              <div className="p-5">
                <div className="flex gap-3 text-xs text-muted mb-2">
                  <span>
                    <span className="fa fa-calendar mr-1" aria-hidden="true" />
                    {p.date}
                  </span>
                  <span>
                    <span className="fa fa-user mr-1" aria-hidden="true" />
                    {p.author}
                  </span>
                  <span>
                    <span className="fa fa-comment mr-1" aria-hidden="true" />
                    {p.comments}
                  </span>
                </div>
                <h3 className="font-bold text-heading hover:text-brand transition-colors cursor-pointer">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
