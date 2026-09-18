import { Calendar, MessageCircle } from 'lucide-react'
import { blogPosts } from '../data'

export function Blog() {
  const featured = blogPosts.find((p) => p.featured)
  const small = blogPosts.filter((p) => !p.featured)

  return (
    <section className="bg-white py-20" id="blog">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Our Blog</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-ink">Every Single Update</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {featured && (
            <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
              <img src={featured.image} alt={featured.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-ink">{featured.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" /> {featured.comments} comments
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-6">
            {small.map((post) => (
              <div key={post.title} className="flex gap-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-20 w-20 flex-shrink-0 rounded object-cover"
                />
                <div>
                  <p className="text-xs font-medium uppercase text-primary">{post.category}</p>
                  <h4 className="mt-1 font-heading text-base font-bold leading-snug text-ink">
                    {post.title}
                  </h4>
                  <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" /> {post.comments} comments
                    </span>
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
