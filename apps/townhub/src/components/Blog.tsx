import { Calendar } from 'lucide-react'
import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="page" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 block font-script text-3xl text-brand">Latest tips</span>
          <h2 className="text-3xl font-semibold text-navy md:text-5xl">News and tips</h2>
        </div>

        {/* Blog cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block text-[13px] font-medium text-brand">
                  {post.category}
                </span>
                <h3 className="mb-3 text-[17px] font-semibold text-navy leading-snug">
                  <a href="#page" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <div className="flex items-center gap-2 text-[13px] text-muted">
                  <Calendar aria-hidden="true" className="h-3.5 w-3.5" />
                  {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
