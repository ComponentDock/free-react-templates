import { Link } from 'lucide-react'

const courses = [
  {
    title: 'Beginner to Pro in Excel: Financial Modeling and Valuation',
    category: 'Business',
    free: true,
    seed: 'eduforge-course1',
  },
  { title: 'Introduction to CSS', category: 'Web Design', free: false, seed: 'eduforge-course2' },
  {
    title: 'The Ultimate Drawing Course | From Beginner To Advanced',
    category: 'Drawing',
    free: false,
    seed: 'eduforge-course3',
  },
  {
    title: 'The Complete Web Development Course',
    category: 'Web Development',
    free: true,
    seed: 'eduforge-course4',
  },
  {
    title: 'PHP Tips, Tricks, and Techniques',
    category: 'Web Development',
    free: true,
    seed: 'eduforge-course5',
  },
  {
    title: 'All You Need To Know About Web Design',
    category: 'Web Design',
    free: true,
    seed: 'eduforge-course6',
  },
  {
    title: 'How to Get Started in Photography',
    category: 'Photography',
    free: true,
    seed: 'eduforge-course7',
  },
  { title: 'Typography From A to Z', category: 'Typography', free: true, seed: 'eduforge-course8' },
]

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Explore Courses</h2>
          <p className="text-body max-w-xl mx-auto">
            Browse our extensive library of courses designed to help you master new skills and
            advance your career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${course.seed}/400/250`}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/20 transition-colors flex items-center justify-center">
                  <Link className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-4">
                <a
                  href="#"
                  className="font-semibold text-heading text-sm hover:text-brand transition-colors block mb-2 line-clamp-2"
                >
                  {course.title}
                </a>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-body">{course.category}</span>
                  <span
                    className={
                      course.free ? 'text-brand font-semibold' : 'text-gray-500 font-semibold'
                    }
                  >
                    {course.free ? 'Free' : 'Premium'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-light transition-colors"
          >
            More Courses
          </a>
        </div>
      </div>
    </section>
  )
}
