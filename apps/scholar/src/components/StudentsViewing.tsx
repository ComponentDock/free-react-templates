import { CourseCard } from './CourseCard'

const courses = [
  {
    imageSeed: 'scholar-s1',
    price: '$118',
    title: 'React Advanced Patterns',
    instructor: 'Emily Davis',
    rating: '4.9',
  },
  {
    imageSeed: 'scholar-s2',
    price: '$118',
    title: 'Cloud Architecture',
    instructor: 'Michael Brown',
    rating: '4.9',
  },
  {
    imageSeed: 'scholar-s3',
    price: '$118',
    title: 'Data Analytics Pro',
    instructor: 'Lisa Anderson',
    rating: '4.9',
  },
  {
    imageSeed: 'scholar-s4',
    price: '$118',
    title: 'iOS App Development',
    instructor: 'Chris Martin',
    rating: '4.9',
  },
  {
    imageSeed: 'scholar-s5',
    price: '$118',
    title: 'Cybersecurity Basics',
    instructor: 'Rachel Lee',
    rating: '4.9',
  },
]

export function StudentsViewing() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">
          Students are viewing
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {courses.map((course) => (
            <CourseCard key={course.imageSeed} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}
