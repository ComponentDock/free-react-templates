import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'The Next Best Thing to Get Natural Teeth',
    date: 'Sep 18, 2026',
    image: 'toothzen-blog1',
  },
  {
    title: 'Tips for a Healthier Smile Every Day',
    date: 'Sep 15, 2026',
    image: 'toothzen-blog2',
  },
  {
    title: 'Modern Dental Technology Advancements',
    date: 'Sep 10, 2026',
    image: 'toothzen-blog3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-tooth-teal">
            Our Blog
          </span>
          <h2 className="mt-2 text-3xl font-bold text-tooth-dark-blue">Recent Posts</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map(({ title, date, image }) => (
            <article key={title} className="group overflow-hidden rounded-lg bg-white shadow-md">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${image}/600/400`}
                  alt={title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-tooth-muted">{date}</span>
                <h3 className="mt-2 font-bold text-tooth-dark-blue">{title}</h3>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-tooth-blue transition-colors hover:text-tooth-dark-blue"
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
