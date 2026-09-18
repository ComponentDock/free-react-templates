interface BlogPost {
  id: number
  title: string
  image: string
  category: string
  date: string
  author: string
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'The Best SPA Salons For Your Relaxation',
    image: 'https://picsum.photos/seed/listhub-blog1/600/400',
    category: 'Tips',
    date: '12 March',
    author: 'Alan',
  },
  {
    id: 2,
    title: 'Top 10 Restaurants You Must Visit This Weekend',
    image: 'https://picsum.photos/seed/listhub-blog2/600/400',
    category: 'Tips',
    date: '15 March',
    author: 'Sarah',
  },
]

export function BlogPosts() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            Latest News
          </h2>
          <p className="mt-2 text-text-muted">Explore Blog Post</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-lg border border-border-light bg-white shadow-sm transition hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <a
                  href="#"
                  className="mb-2 inline-block rounded-md bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
                >
                  {post.category}
                </a>
                <p className="mb-2 text-xs text-text-muted">
                  {post.date} &mdash; by {post.author}
                </p>
                <h3 className="text-lg font-semibold text-heading group-hover:text-brand">
                  <a href="#">{post.title}</a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
