import { CourseCard } from './CourseCard'

const courses = [
  {
    imageSeed: 'scholar-c1',
    price: '$118',
    title: 'Python for Data Science',
    instructor: 'Dr. Sarah Chen',
    rating: '4.9',
  },
  {
    imageSeed: 'scholar-c2',
    price: '$118',
    title: 'Web Development Bootcamp',
    instructor: 'James Wilson',
    rating: '4.9',
  },
  {
    imageSeed: 'scholar-c3',
    price: '$118',
    title: 'UX Design Fundamentals',
    instructor: 'Maria Garcia',
    rating: '4.9',
  },
  {
    imageSeed: 'scholar-c4',
    price: '$118',
    title: 'Digital Marketing Mastery',
    instructor: 'Alex Thompson',
    rating: '4.9',
  },
  {
    imageSeed: 'scholar-c5',
    price: '$118',
    title: 'Machine Learning A-Z',
    instructor: 'Prof. David Kim',
    rating: '4.9',
  },
]

export function PopularCourses() {
  return (
    <section id="courses" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">
            The world&apos;s largest selection of courses
          </h2>
          <p className="mt-3 text-body">
            Choose from over 100,000 online video courses with new additions published every month
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {courses.map((course) => (
            <CourseCard key={course.imageSeed} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}
