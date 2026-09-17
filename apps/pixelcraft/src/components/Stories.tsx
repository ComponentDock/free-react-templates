const posts = [
  { num: '01', title: 'Design Trends to Watch in 2024', author: 'Alex Morgan', category: 'Design' },
  {
    num: '02',
    title: 'Building Accessible Web Applications',
    author: 'Sarah Chen',
    category: 'Development',
  },
  {
    num: '03',
    title: 'The Power of Brand Storytelling',
    author: 'Marcus Lee',
    category: 'Branding',
  },
  {
    num: '04',
    title: 'Mobile-First Design Strategies',
    author: 'Alex Morgan',
    category: 'UX Design',
  },
]

export function Stories() {
  return (
    <section id="stories" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_370px]">
          {/* Blog posts */}
          <div className="space-y-8">
            {posts.map((post) => (
              <div key={post.num} className="flex gap-6">
                <span
                  className="min-w-[50px] text-4xl font-bold text-green-title"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {post.num}
                </span>
                <div>
                  <div
                    className="flex items-center gap-2 text-sm text-gray-text"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <span>{post.author}</span>
                    <span>·</span>
                    <span className="text-pink-brand">{post.category}</span>
                  </div>
                  <h3
                    className="mt-1 text-xl font-bold text-navy-body"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Title block */}
          <div className="flex h-[370px] w-[370px] flex-col items-center justify-center bg-green-title">
            <span
              className="text-6xl font-bold text-green-num"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              04
            </span>
            <span
              className="mt-2 text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Stories
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
