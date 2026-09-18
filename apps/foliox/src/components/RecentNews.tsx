const POSTS = [
  {
    id: 1,
    title: 'How Creative Design Shapes Modern Brand Identity',
    author: 'Lora Palmer',
    date: 'Sep 29, 2024',
    seed: 'foliox-blog-1',
  },
  {
    id: 2,
    title: 'The Rise of Minimalist Web Design in 2024',
    author: 'Lora Palmer',
    date: 'Oct 15, 2024',
    seed: 'foliox-blog-2',
  },
  {
    id: 3,
    title: 'Building Scalable Design Systems for Growth',
    author: 'Lora Palmer',
    date: 'Nov 3, 2024',
    seed: 'foliox-blog-3',
  },
]

export function RecentNews() {
  return (
    <section id="news" className="bg-surface pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-heading">Recent News</h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-primary" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-sm bg-white">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/350`}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="mb-3 text-lg font-semibold leading-snug text-heading">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/seed/foliox-author/40/40`}
                    alt=""
                    className="h-8 w-8 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-medium text-heading">{post.author}</p>
                    <p className="text-xs text-muted">{post.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
