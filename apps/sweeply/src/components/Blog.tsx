const posts = [
  {
    title: 'Tips on how to hire a house cleaning service',
    date: 'Oct. 21, 2020',
    author: 'Admin',
    comments: 3,
    img: 'sweeply-blog1',
  },
  {
    title: 'Why professional cleaning is worth the cost',
    date: 'Oct. 21, 2020',
    author: 'Admin',
    comments: 3,
    img: 'sweeply-blog2',
  },
  {
    title: 'Eco-friendly cleaning products for your home',
    date: 'Oct. 21, 2020',
    author: 'Admin',
    comments: 3,
    img: 'sweeply-blog3',
  },
]

export function Blog() {
  return (
    <section className="py-16 bg-light" id="blog">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-brand uppercase tracking-wider">Our Blog</span>
          <h2 className="text-3xl font-bold text-heading mt-3">Recent Post</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${post.img}/600/400)` }}
              />
              <div className="p-6 text-center">
                <div className="flex items-center justify-center gap-4 text-xs text-muted mb-3">
                  <span>
                    <span className="fa fa-calendar mr-1" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span>
                    <span className="fa fa-user mr-1" aria-hidden="true" />
                    {post.author}
                  </span>
                  <span>
                    <span className="fa fa-comment mr-1" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <h3 className="font-bold text-heading mb-2">{post.title}</h3>
                <p className="text-sm text-muted">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia...
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
