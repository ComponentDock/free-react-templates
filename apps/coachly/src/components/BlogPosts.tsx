const POSTS = [
  {
    title: 'Finding Your Purpose',
    date: 'Sep 10, 2025',
    desc: 'Discover the steps to uncovering your true calling and living a purposeful life.',
    seed: 'coachly-blog1',
  },
  {
    title: 'The Power of Habits',
    date: 'Sep 8, 2025',
    desc: 'Learn how small daily habits can create massive transformations over time.',
    seed: 'coachly-blog2',
  },
  {
    title: 'Work-Life Balance',
    date: 'Sep 5, 2025',
    desc: 'Practical strategies for achieving harmony between your career and personal life.',
    seed: 'coachly-blog3',
  },
]

export function BlogPosts() {
  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Blog Posts</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <div key={post.title}>
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={post.title}
                className="mb-4 w-full rounded-lg object-cover"
              />
              <p className="mb-2 text-sm text-gray-500">{post.date}</p>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
