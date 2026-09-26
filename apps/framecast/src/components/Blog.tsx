const posts = [
  {
    id: 1,
    title: 'Design Trends to Watch in 2026',
    date: 'Mar 15, 2026',
    img: 'https://picsum.photos/seed/framecast-blog-1/400/250',
  },
  {
    id: 2,
    title: 'Building Strong Brand Identities',
    date: 'Mar 10, 2026',
    img: 'https://picsum.photos/seed/framecast-blog-2/400/250',
  },
  {
    id: 3,
    title: 'The Future of 3D in Web Design',
    date: 'Mar 5, 2026',
    img: 'https://picsum.photos/seed/framecast-blog-3/400/250',
  },
  {
    id: 4,
    title: 'Creating Effective UX Workflows',
    date: 'Feb 28, 2026',
    img: 'https://picsum.photos/seed/framecast-blog-4/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-poppins text-3xl font-bold text-dark">
          Our Creative Articles
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="mb-2 block text-sm text-muted">{post.date}</span>
              <h3 className="font-poppins text-lg font-semibold text-dark transition-colors group-hover:text-brand">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block border border-brand bg-transparent px-8 py-3 font-alata text-sm text-dark transition-colors hover:bg-brand hover:text-white"
          >
            More Blogs
          </a>
        </div>
      </div>
    </section>
  )
}
