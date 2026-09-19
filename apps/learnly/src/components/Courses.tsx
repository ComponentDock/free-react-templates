import { Star } from 'lucide-react'

interface Course {
  title: string
  category: string
  price: string
  description: string
  image: string
}

const COURSES: Course[] = [
  {
    title: 'How To Create Mobile Apps Using Ionic',
    category: 'Mobile Application',
    price: '$99.00',
    description:
      'Learn to build cross-platform mobile applications using the Ionic framework and modern web technologies.',
    image: 'https://picsum.photos/seed/learnly-course1/600/400',
  },
  {
    title: 'Mastering Web Design Fundamentals',
    category: 'Web Design',
    price: '$99.00',
    description:
      'A comprehensive guide to creating stunning, responsive websites from scratch using modern design principles.',
    image: 'https://picsum.photos/seed/learnly-course2/600/400',
  },
  {
    title: 'Advanced Arithmetic & Mathematics',
    category: 'Arithmetic',
    price: '$99.00',
    description:
      'Dive deep into advanced mathematical concepts and develop strong analytical problem-solving skills.',
    image: 'https://picsum.photos/seed/learnly-course3/600/400',
  },
  {
    title: 'Building iOS Apps with Swift',
    category: 'Mobile Application',
    price: '$99.00',
    description:
      'Create polished iOS applications using Swift, covering everything from UI design to App Store deployment.',
    image: 'https://picsum.photos/seed/learnly-course4/600/400',
  },
  {
    title: 'UI/UX Design Principles',
    category: 'Web Design',
    price: '$99.00',
    description:
      'Master the art of designing beautiful and intuitive user interfaces that delight your users.',
    image: 'https://picsum.photos/seed/learnly-course5/600/400',
  },
  {
    title: 'Python for Data Science',
    category: 'Mobile Application',
    price: '$99.00',
    description:
      'Learn Python programming with a focus on data analysis, visualization, and machine learning basics.',
    image: 'https://picsum.photos/seed/learnly-course6/600/400',
  },
]

function StarRating() {
  return (
    <div className="mb-3 flex justify-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export function Courses() {
  return (
    <section className="bg-paper py-16 md:py-24" id="courses">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">Popular Courses</h2>
          <div className="mx-auto h-1 w-20 bg-brand" />
          <p className="mt-4 text-mist">
            Explore our most popular courses and start your learning journey today.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 bg-brand px-3 py-1 text-sm font-bold text-white">
                  {course.price}
                </span>
                <span className="absolute bottom-3 left-3 bg-ink/80 px-3 py-1 text-sm font-semibold text-white">
                  {course.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-ink">{course.title}</h3>
                <StarRating />
                <p className="mb-4 text-sm text-mist">{course.description}</p>
                <a
                  href="#"
                  className="inline-block rounded-none bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Enroll In This Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
