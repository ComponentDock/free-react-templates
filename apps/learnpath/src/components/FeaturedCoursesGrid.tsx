import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const tabs = ['All', 'Business', 'Design', 'Web Development', 'Photography']

const courses = [
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-grid1/400/300',
    title: 'Digital Marketing Course',
    author: 'John Doe',
    date: 'Jan 10, 2026',
    price: 35,
    rating: 5,
  },
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-grid2/400/300',
    title: 'Web Development Bootcamp',
    author: 'Jane Smith',
    date: 'Feb 5, 2026',
    price: null,
    rating: 4,
  },
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-grid3/400/300',
    title: 'Photography Masterclass',
    author: 'Alex Brown',
    date: 'Mar 12, 2026',
    price: 49,
    rating: 5,
  },
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-grid4/400/300',
    title: 'Business Strategy',
    author: 'Lisa White',
    date: 'Apr 1, 2026',
    price: 29,
    rating: 4,
  },
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-grid5/400/300',
    title: 'UI/UX Design Fundamentals',
    author: 'Tom Green',
    date: 'May 8, 2026',
    price: null,
    rating: 5,
  },
  {
    thumbnail: 'https://picsum.photos/seed/learnpath-grid6/400/300',
    title: 'Advanced JavaScript',
    author: 'Sarah Lee',
    date: 'Jun 15, 2026',
    price: 42,
    rating: 4,
  },
]

export function FeaturedCoursesGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold text-text">Featured Courses</h2>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className={cn(
                  'border px-4 py-1.5 text-sm font-medium transition',
                  i === 0
                    ? 'border-brand bg-brand text-white'
                    : 'border-border text-text-muted hover:border-brand hover:text-brand',
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div
              key={c.title}
              className="overflow-hidden border border-border bg-white transition hover:shadow-md"
            >
              <img
                src={c.thumbnail}
                alt={c.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="mb-1 text-lg font-bold text-text">{c.title}</h3>
                <p className="mb-1 text-sm text-text-muted">{c.author}</p>
                <p className="mb-2 text-xs text-text-muted">{c.date}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${i < c.rating ? 'fill-star text-star' : 'text-border'}`}
                      />
                    ))}
                  </div>
                  {c.price === null ? (
                    <span className="font-bold text-brand">Free</span>
                  ) : (
                    <span className="font-bold text-text">${c.price}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#courses"
            className="inline-block border-2 border-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-white"
          >
            view all courses
          </a>
        </div>
      </div>
    </section>
  )
}
