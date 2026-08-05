const posts = [
  {
    category: 'Software / Business',
    date: 'March 10, 2019',
    title: 'How to launch a product users actually remember',
    comments: '02 Comments',
  },
  {
    category: 'Software / Business',
    date: 'March 10, 2019',
    title: 'The simple growth playbook behind our best quarter',
    comments: '02 Comments',
  },
  {
    category: 'Software / Business',
    date: 'March 10, 2019',
    title: 'Five lessons from shipping software at scale',
    comments: '02 Comments',
  },
] as const

export function Blog() {
  return (
    <section aria-label="Blog" className="bg-paper py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Read Our Latest News
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body dark:text-gray-400">
            Life firmament under them evening make after called dont saying likeness isn't wherein
            also forth she'd air two without
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src="https://picsum.photos/seed/favison-blog/640/360"
                alt=""
                aria-hidden="true"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {post.category}
                </p>
                <p className="mt-1 text-xs text-body dark:text-gray-500">{post.date}</p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-xs text-body dark:text-gray-400">{post.comments}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
