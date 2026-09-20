import { DollarSign, Clock, Users } from 'lucide-react'

const courses = [
  {
    category: 'English',
    title: 'English for Tomorrow',
    price: '$20',
    duration: '3 months',
    students: '200+',
    image: 'https://picsum.photos/seed/brightmind-course1/400/250',
  },
  {
    category: 'Science',
    title: 'Science & Innovation',
    price: '$25',
    duration: '4 months',
    students: '150+',
    image: 'https://picsum.photos/seed/brightmind-course2/400/250',
  },
  {
    category: 'Mathematics',
    title: 'Advanced Mathematics',
    price: '$30',
    duration: '5 months',
    students: '180+',
    image: 'https://picsum.photos/seed/brightmind-course3/400/250',
  },
]

export function Courses() {
  return (
    <section id="courses" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-dark">Our Courses</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <span className="mb-2 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-500">
                  {course.category}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-dark">{course.title}</h3>
                <div className="mb-4 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    {course.price}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.students}
                  </span>
                </div>
                <a href="#enroll" className="text-sm font-medium text-brand-500 hover:underline">
                  Enroll Now &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
