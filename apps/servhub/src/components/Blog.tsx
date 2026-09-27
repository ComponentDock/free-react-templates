const posts = [
  {
    title: 'A small river named Duden flows by their place',
    date: 'April 25, 2024',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'servhub-blog-1',
  },
  {
    title: 'Far from the countries Vokalia and Consonantia',
    date: 'April 20, 2024',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'servhub-blog-2',
  },
  {
    title: 'The Big Oxmox advised her not to do so',
    date: 'April 15, 2024',
    excerpt:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.',
    seed: 'servhub-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-black">Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-black">{post.title}</h3>
                <span className="mb-3 block text-xs text-gray-400">{post.date}</span>
                <p className="mb-4 text-sm">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="text-sm font-semibold text-lime-400 transition hover:text-black"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
