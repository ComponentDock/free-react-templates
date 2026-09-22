const posts = [
  {
    title: '10 Tips for Building Strength at Home',
    date: 'February 17, 2024',
    tag: 'Fitness',
    seed: 'gymcore-blog1',
  },
  {
    title: 'Nutrition Guide for Muscle Recovery',
    date: 'February 17, 2024',
    tag: 'Nutrition',
    seed: 'gymcore-blog2',
  },
  {
    title: 'How to Stay Motivated on Your Fitness Journey',
    date: 'February 17, 2024',
    tag: 'Mindset',
    seed: 'gymcore-blog3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold uppercase text-ink md:text-4xl">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <div className="mb-3 flex items-center gap-3 text-xs text-mist">
                  <span>{post.date}</span>
                  <span className="rounded bg-brand/10 px-2 py-0.5 text-brand">#{post.tag}</span>
                </div>
                <h4 className="text-lg font-semibold text-ink">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
