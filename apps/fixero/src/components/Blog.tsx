const posts = [
  {
    image: 'https://picsum.photos/seed/fixero-blog1/600/400',
    title: 'Top Tips For Your Next Home Renovation',
    date: 'July 17, 2024',
    author: 'Admin',
    excerpt:
      'Planning a home renovation can be overwhelming. Here are our top tips to make the process smoother and more efficient.',
  },
  {
    image: 'https://picsum.photos/seed/fixero-blog2/600/400',
    title: 'Choosing The Right Construction Materials',
    date: 'July 10, 2024',
    author: 'Admin',
    excerpt:
      'The materials you choose can make or break your construction project. Learn how to select the best options for your budget.',
  },
  {
    image: 'https://picsum.photos/seed/fixero-blog3/600/400',
    title: 'Why Professional Finishing Matters',
    date: 'July 3, 2024',
    author: 'Admin',
    excerpt:
      'Professional finishing touches can transform a good project into a great one. Discover the difference quality finishing makes.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white">Our Blog</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-brand" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-ink dark:text-white">{post.title}</h3>
                <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                  {post.date} by {post.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
