import { ArrowRight } from 'lucide-react'

const posts = [
  { title: 'Architectural Art Modern', date: '29, January 2019', seed: 'pillar-blog-1' },
  { title: 'Architectural Art Modern', date: '29, January 2019', seed: 'pillar-blog-2' },
  { title: 'Architectural Art Modern', date: '29, January 2019', seed: 'pillar-blog-3' },
]

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
            Our Blog Posts
          </h4>
          <h2 className="text-3xl font-bold text-gray-900">News &amp; Update</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <div key={i} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${p.seed}/600/400`}
                alt={p.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <p className="mb-2 text-xs text-gray-400">{p.date}</p>
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
