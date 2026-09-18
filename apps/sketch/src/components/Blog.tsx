const posts = [
  {
    date: 'May 12, 2024',
    title: 'Modern Design Trends to Watch',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    date: 'May 10, 2024',
    title: 'Building Scalable Web Applications',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    date: 'May 8, 2024',
    title: 'The Future of Creative Development',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    date: 'May 5, 2024',
    title: 'Tips for Better User Experience',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    date: 'May 1, 2024',
    title: 'Launching Your First Project',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand">
            Blog
          </span>
          <h2 className="text-2xl font-bold text-heading md:text-3xl">Latest Blog Posts</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {posts.map((post) => (
            <article key={post.title}>
              <span className="mb-2 block text-xs text-gray-500">{post.date}</span>
              <h3 className="mb-2 text-sm font-bold text-heading">
                <a href="#" className="hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="text-xs text-gray-600">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
