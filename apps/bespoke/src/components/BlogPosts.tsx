const posts = [
  {
    date: 'May 17th, 2025',
    title: 'Behind the Scenes at Our Latest Shoot',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'bespoke-blog-1',
    offset: false,
  },
  {
    date: 'May 14th, 2025',
    title: 'Top Trends for the Season',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'bespoke-blog-2',
    offset: true,
  },
  {
    date: 'May 10th, 2025',
    title: 'How to Style Your Wardrobe',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'bespoke-blog-3',
    offset: false,
  },
  {
    date: 'May 6th, 2025',
    title: 'The Art of Sustainable Fashion',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'bespoke-blog-4',
    offset: true,
  },
]

export function BlogPosts() {
  return (
    <section id="blog" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display mb-8 text-3xl font-bold text-black md:text-4xl">Blog Posts</h2>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <div key={post.title} className={post.offset && i % 2 === 1 ? 'lg:mt-12' : ''}>
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/300`}
                alt={post.title}
                className="mb-4 w-full object-cover"
                loading="lazy"
              />
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-brand">
                {post.date}
              </span>
              <a
                href="#"
                className="mb-2 block text-base font-bold text-black transition-colors hover:text-brand"
              >
                {post.title}
              </a>
              <p className="text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
