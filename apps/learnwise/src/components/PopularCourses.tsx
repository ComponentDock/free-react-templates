import { User, Star } from 'lucide-react'

const courses = [
  {
    title: 'English Grammar',
    author: 'Sarah Parker',
    category: 'Art & Design',
    description:
      'Learn the fundamentals of English grammar with practical exercises and real-world examples.',
    seats: 10,
    rating: 4.5,
    fee: 'Free',
    image: 'https://picsum.photos/seed/learnwise-course1/400/300',
  },
  {
    title: 'Vocabulary',
    author: 'Sarah Parker',
    category: 'Art & Design',
    description:
      'Expand your vocabulary with curated word lists and contextual usage in everyday communication.',
    seats: 10,
    rating: 4.5,
    fee: '$20',
    image: 'https://picsum.photos/seed/learnwise-course2/400/300',
  },
  {
    title: 'Expository Writing',
    author: 'Sarah Parker',
    category: 'Art & Design',
    description:
      'Master expository writing techniques for essays, reports, and professional documentation.',
    seats: 10,
    rating: 4.5,
    fee: '$45',
    image: 'https://picsum.photos/seed/learnwise-course3/400/300',
  },
]

export function PopularCourses() {
  return (
    <section id="courses" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h3 className="mb-12 text-center font-heading text-3xl font-bold text-gray-800">
          Popular Online Courses
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div key={c.title} className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={c.image}
                alt={c.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h4 className="mb-2 text-lg font-bold text-gray-800">{c.title}</h4>
                <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                  <span>{c.author}</span>
                  <span>•</span>
                  <span>{c.category}</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">{c.description}</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3">
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {c.seats}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> {c.rating}
                  </span>
                </div>
                <a
                  href="#"
                  className={`rounded px-4 py-1 text-xs font-semibold ${
                    c.fee === 'Free'
                      ? 'bg-primary text-white'
                      : 'border border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
                  }`}
                >
                  {c.fee}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
