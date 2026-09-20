const posts = [
  {
    date: 'August 12, 2024',
    author: 'Admin',
    comments: 3,
    title: 'How to Stand Out at Your First Job',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/brightmind-blog1/400/250',
  },
  {
    date: 'July 28, 2024',
    author: 'Admin',
    comments: 5,
    title: 'The Future of Online Learning',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/brightmind-blog2/400/250',
  },
  {
    date: 'July 12, 2024',
    author: 'Admin',
    comments: 2,
    title: 'Tips for Effective Study Habits',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    image: 'https://picsum.photos/seed/brightmind-blog3/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-dark">Recent from Blog</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-muted">
                  <span>{post.date}</span>
                  <span>by {post.author}</span>
                  <span>{post.comments} comments</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-dark">
                  <a href="#" className="hover:text-brand-500">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
