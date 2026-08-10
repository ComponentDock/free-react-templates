interface Post {
  title: string
  copy: string
  date: string
  comments: string
  image: string
}

const posts: Post[] = [
  {
    title: 'Young Women Doing Abdominal',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    date: 'December 23, 2018',
    comments: '3 Comments',
    image: 'https://picsum.photos/seed/pump-blog-1/400/260',
  },
  {
    title: '5 Exercises To Fix Your Posture',
    copy: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    date: 'December 19, 2018',
    comments: '5 Comments',
    image: 'https://picsum.photos/seed/pump-blog-2/400/260',
  },
  {
    title: 'Meal Prep For A Lean Week',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    date: 'December 12, 2018',
    comments: '2 Comments',
    image: 'https://picsum.photos/seed/pump-blog-3/400/260',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-cloud py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">Articles</p>
          <h2 className="font-display text-4xl font-black uppercase text-ink dark:text-white">
            Recent Blog
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-mist dark:text-gray-400">
                  <span>{post.date}</span>
                  <span aria-hidden="true"> · </span>
                  <span>Admin</span>
                  <span aria-hidden="true"> · </span>
                  <span>{post.comments}</span>
                </p>
                <h3 className="mt-3 font-display text-lg font-bold uppercase text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {post.copy}
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-orange"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
