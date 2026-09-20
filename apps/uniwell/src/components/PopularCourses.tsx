import { Clock, Users, Star } from 'lucide-react'

const courses = [
  {
    title: 'Complete Web Development Bootcamp',
    instructor: 'Dr. Sarah Mitchell',
    rating: 4.8,
    students: 12450,
    duration: '42 hours',
    price: '$49.99',
    image: 'https://picsum.photos/seed/course-web/400/250',
    badge: 'Bestseller',
  },
  {
    title: 'Data Science & Machine Learning',
    instructor: 'Prof. James Chen',
    rating: 4.7,
    students: 8920,
    duration: '38 hours',
    price: '$59.99',
    image: 'https://picsum.photos/seed/course-data/400/250',
    badge: 'New',
  },
  {
    title: 'Mobile App Development with React Native',
    instructor: 'Emily Rodriguez',
    rating: 4.9,
    students: 6340,
    duration: '30 hours',
    price: '$44.99',
    image: 'https://picsum.photos/seed/course-mobile/400/250',
    badge: 'Hot',
  },
  {
    title: 'Digital Marketing Masterclass',
    instructor: 'Michael Thompson',
    rating: 4.6,
    students: 9870,
    duration: '28 hours',
    price: '$39.99',
    image: 'https://picsum.photos/seed/course-marketing/400/250',
    badge: '',
  },
  {
    title: 'UX/UI Design Fundamentals',
    instructor: 'Anna Kowalski',
    rating: 4.8,
    students: 5620,
    duration: '24 hours',
    price: '$34.99',
    image: 'https://picsum.photos/seed/course-design/400/250',
    badge: '',
  },
  {
    title: 'Business Analytics & Intelligence',
    instructor: 'Robert Kim',
    rating: 4.5,
    students: 7210,
    duration: '32 hours',
    price: '$54.99',
    image: 'https://picsum.photos/seed/course-business/400/250',
    badge: '',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
        />
      ))}
      <span className="ml-1 text-xs font-medium text-charcoal">{rating}</span>
    </div>
  )
}

export function PopularCourses() {
  return (
    <section className="bg-cloud py-20" id="courses" aria-labelledby="courses-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2
            id="courses-heading"
            className="mb-4 text-3xl font-bold text-ink font-display md:text-4xl"
          >
            Popular Courses
          </h2>
          <p className="mx-auto max-w-xl text-smoke">
            Discover our most popular courses chosen by thousands of students worldwide.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                {course.badge && (
                  <span className="absolute left-3 top-3 rounded bg-primary-400 px-2.5 py-1 text-xs font-bold text-white uppercase">
                    {course.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-ink group-hover:text-primary-500 transition-colors">
                  {course.title}
                </h3>
                <p className="mb-3 text-sm text-smoke">{course.instructor}</p>
                <StarRating rating={course.rating} />
                <div className="mt-3 flex items-center gap-4 text-xs text-smoke">
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    {course.students.toLocaleString()} students
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {course.duration}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-lg font-bold text-primary-500">{course.price}</span>
                  <button
                    type="button"
                    className="rounded bg-primary-400 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-primary-500 transition-colors"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
