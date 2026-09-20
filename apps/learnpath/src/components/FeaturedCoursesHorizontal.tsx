import { Star } from 'lucide-react'

const courses = [
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-course1/400/300',
    title: 'Digital Marketing',
    author: 'John Doe',
    date: 'Jan 15, 2026',
    price: null,
    rating: 5,
  },
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-course2/400/300',
    title: 'Advanced Web Development',
    author: 'Jane Smith',
    date: 'Feb 20, 2026',
    price: 32,
    oldPrice: 59,
    rating: 4,
  },
]

export function FeaturedCoursesHorizontal() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-text">Featured Courses</h2>
          <a
            href="#courses"
            className="border-2 border-brand px-6 py-2 text-sm font-semibold uppercase text-brand transition hover:bg-brand hover:text-white"
          >
            view all
          </a>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          {courses.map((c) => (
            <div
              key={c.title}
              className="flex flex-col overflow-hidden border border-border bg-white sm:flex-row"
            >
              <img
                src={c.thumbnail}
                alt={c.title}
                className="h-48 w-full object-cover sm:h-auto sm:w-48"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="mb-1 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < c.rating ? 'fill-star text-star' : 'text-border'}`}
                      />
                    ))}
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-text">{c.title}</h3>
                  <p className="text-sm text-text-muted">{c.author}</p>
                  <p className="text-xs text-text-muted">{c.date}</p>
                </div>
                <div className="mt-3">
                  {c.price === null ? (
                    <span className="text-brand font-bold">Free</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-text">${c.price}</span>
                      <span className="text-sm text-text-muted line-through">${c.oldPrice}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
