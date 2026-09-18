const posts = [
  {
    id: 1,
    title: 'Creative Designer',
    location: 'New York',
    description:
      'Join our creative team to design stunning visuals for top brands. Experience in Figma and Adobe Suite required.',
    seed: 'designer-1',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    location: 'San Francisco',
    description:
      'Build scalable web applications using React, Node.js, and cloud technologies. Remote-friendly position.',
    seed: 'developer-2',
  },
  {
    id: 3,
    title: 'Marketing Manager',
    location: 'Los Angeles',
    description:
      'Lead marketing campaigns and grow our brand presence across digital channels. MBA preferred.',
    seed: 'marketing-3',
  },
  {
    id: 4,
    title: 'Data Analyst',
    location: 'Chicago',
    description:
      'Analyze business data and create insightful reports to drive strategic decisions. Python and SQL skills needed.',
    seed: 'analyst-4',
  },
  {
    id: 5,
    title: 'Product Manager',
    location: 'Austin',
    description:
      'Own the product roadmap and work with cross-functional teams to deliver great user experiences.',
    seed: 'product-5',
  },
  {
    id: 6,
    title: 'UX Researcher',
    location: 'Seattle',
    description:
      'Conduct user research and usability testing to inform product design decisions. Psychology background a plus.',
    seed: 'ux-6',
  },
]

export function PopularPosts() {
  return (
    <section className="bg-surface py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex gap-4 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/120/120`}
                alt=""
                className="h-24 w-24 flex-shrink-0 rounded object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col">
                <h4 className="text-base font-semibold text-gray-900">{post.title}</h4>
                <p className="mb-1 text-xs text-gray-500">{post.location}</p>
                <p className="mb-2 flex-1 text-sm text-gray-600">{post.description}</p>
                <a
                  href="#"
                  className="self-start rounded bg-brand px-3 py-1 text-xs font-semibold uppercase text-white transition-colors hover:bg-brand/90"
                >
                  View Job Post
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
