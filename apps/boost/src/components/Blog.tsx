const posts = [
  {
    title: 'Best For Web Startups and Web Apps',
    author: 'Ham Brook',
    date: 'Jan 18, 2020',
    category: 'News',
    blurb:
      'A closer look at why fast-moving startups choose Boost to keep product and engineering aligned.',
    image: 'https://picsum.photos/seed/boost-blog-1/800/500',
  },
  {
    title: 'Best For Web Startups and Web Apps',
    author: 'James Phelps',
    date: 'Jan 16, 2020',
    category: 'News',
    blurb:
      'Five workflows that save our customers hours every week, straight from the product team.',
    image: 'https://picsum.photos/seed/boost-blog-2/800/500',
  },
  {
    title: 'Best For Web Startups and Web Apps',
    author: 'James Phelps',
    date: 'Jan 14, 2020',
    category: 'News',
    blurb: 'From first sprint to full rollout — how teams adopt Boost without slowing down.',
    image: 'https://picsum.photos/seed/boost-blog-3/800/500',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white">News & Updates</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-mist dark:text-gray-400">
          Product news, guides, and stories from the team.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.image}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <img src={post.image} alt="" className="h-44 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-ink dark:text-white">{post.title}</h3>
                <p className="mt-3 text-xs text-mist dark:text-gray-400">
                  <span className="font-medium text-ink dark:text-white">{post.author}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{post.date}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{post.category}</span>
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {post.blurb}
                </p>
                <a
                  href="#blog"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-ink dark:hover:text-white"
                >
                  Continue Reading...
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
