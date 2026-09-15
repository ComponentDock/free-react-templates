const posts = [
  {
    title: 'Top 10 Tasks to Delegate to a Virtual Assistant',
    date: 'Sep 10, 2026',
    description: 'Discover the most impactful tasks you can hand off to boost your productivity.',
    image: 'https://picsum.photos/seed/valet-blog1/400/250',
  },
  {
    title: 'How Virtual Assistants Are Transforming Small Businesses',
    date: 'Sep 5, 2026',
    description:
      'Small businesses are leveraging virtual assistants to compete with larger enterprises.',
    image: 'https://picsum.photos/seed/valet-blog2/400/250',
  },
  {
    title: 'The Future of Remote Work and Virtual Assistance',
    date: 'Sep 1, 2026',
    description: 'Explore how remote work trends are shaping the virtual assistant industry.',
    image: 'https://picsum.photos/seed/valet-blog3/400/250',
  },
]

export function Blog() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">Blog</p>
          <h2 className="text-3xl font-bold">Recent Blog</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="mb-2 text-xs text-gray-500">{post.date}</p>
                <h3 className="mb-2 text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
