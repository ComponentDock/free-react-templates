import { blogPosts } from '../data'

export function Blog() {
  const featured = blogPosts.find((p) => p.featured)
  const sidebar = blogPosts.filter((p) => !p.featured)

  return (
    <section id="blog" className="bg-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-ink">Latest From Our Blog</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {featured && (
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded bg-white shadow-sm">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                    {featured.category}
                  </p>
                  <h3 className="mb-2 font-heading text-xl font-bold text-ink">{featured.title}</h3>
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>{featured.date}</span>
                    <span>{featured.comments} Comments</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="space-y-6">
            {sidebar.map((post) => (
              <div key={post.title} className="flex gap-4 bg-white p-4 shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-16 w-16 flex-shrink-0 rounded object-cover"
                />
                <div>
                  <p className="mb-1 text-xs font-medium uppercase text-primary">{post.category}</p>
                  <h4 className="mb-1 font-heading text-sm font-bold text-ink">{post.title}</h4>
                  <div className="flex gap-3 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
