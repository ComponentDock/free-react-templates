const blogPosts = [
  {
    title: 'Your daily meal plan',
    description:
      'Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.',
    image: 'https://picsum.photos/seed/vitalblend-blog1/600/400',
  },
  {
    title: 'Food is a great source of medicine',
    description:
      'Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.',
    image: 'https://picsum.photos/seed/vitalblend-blog2/600/400',
  },
  {
    title: 'Everyday diet plan',
    description:
      'Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.',
    image: 'https://picsum.photos/seed/vitalblend-blog3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-16 text-center text-3xl font-medium text-brand-heading lg:text-4xl">
          Latest Blog
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title}>
              <div className="mb-4 overflow-hidden rounded-[50px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-lg font-medium text-brand-heading">
                <a href="#" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="text-brand-body">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
