const BLOG_POSTS = [
  {
    title: 'How to Ace Your Technical Interview',
    excerpt: 'Tips and strategies to prepare for and succeed in technical interviews.',
    image: 'https://picsum.photos/seed/talentgate-blog-1/400/250',
    date: 'Sep 15, 2026',
    author: 'TalentGate Team',
  },
  {
    title: 'Remote Work Best Practices',
    excerpt: 'Stay productive and maintain work-life balance while working from home.',
    image: 'https://picsum.photos/seed/talentgate-blog-2/400/250',
    date: 'Sep 12, 2026',
    author: 'Sarah Johnson',
  },
  {
    title: 'Career Growth in 2026',
    excerpt: 'Top skills employers are looking for and how to develop them.',
    image: 'https://picsum.photos/seed/talentgate-blog-3/400/250',
    date: 'Sep 10, 2026',
    author: 'Michael Chen',
  },
  {
    title: 'Building Your Professional Network',
    excerpt: 'Effective strategies to expand your professional connections.',
    image: 'https://picsum.photos/seed/talentgate-blog-4/400/250',
    date: 'Sep 8, 2026',
    author: 'Emily Davis',
  },
]

export function BlogGrid() {
  return (
    <section id="blog" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-dark-overlay">Recent Blog</h2>
          <p className="text-gray-500">Stay updated with career insights</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-dark-overlay">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
