const posts = [
  {
    image: 'https://picsum.photos/seed/blog1/400/300',
    title: 'Coaching Life Is Better Than Schooling',
    date: 'April 17, 2024',
    excerpt:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    image: 'https://picsum.photos/seed/blog2/400/300',
    title: 'Coaching Life Is Better Than Schooling',
    date: 'April 17, 2024',
    excerpt:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    image: 'https://picsum.photos/seed/blog3/400/300',
    title: 'Coaching Life Is Better Than Schooling',
    date: 'April 17, 2024',
    excerpt:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    image: 'https://picsum.photos/seed/blog4/400/300',
    title: 'Coaching Life Is Better Than Schooling',
    date: 'April 17, 2024',
    excerpt:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
]

export function Blog() {
  return (
    <section id="blog-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Blog</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt
            voluptatum pariatur. Officia eaque ipsum ducimus.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post, i) => (
            <article key={`${post.title}-${i}`} className="flex gap-4">
              <figure className="shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-24 w-24 rounded object-cover sm:h-32 sm:w-32"
                  loading="lazy"
                />
              </figure>
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">{post.title}</h3>
                <span className="mb-2 block text-sm text-gray-500">{post.date}</span>
                <p className="mb-2 text-sm text-gray-600">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-sm font-medium text-primary transition-colors hover:text-primary-light"
                >
                  Read More..
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
