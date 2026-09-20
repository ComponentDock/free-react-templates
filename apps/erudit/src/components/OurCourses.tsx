import { Link } from 'lucide-react'

const courses = [
  {
    id: 1,
    teacher: 'David Clarson',
    title: 'Developing Mobile Apps Using Ruby on Rails',
    price: 150,
    oldPrice: 250,
    image: 'https://picsum.photos/seed/erudit-oc1/600/400',
  },
  {
    id: 2,
    teacher: 'Sarah Miller',
    title: 'Advanced Web Development with React',
    price: 120,
    oldPrice: 200,
    image: 'https://picsum.photos/seed/erudit-oc2/600/400',
  },
  {
    id: 3,
    teacher: 'James Wilson',
    title: 'Data Science and Machine Learning',
    price: 180,
    oldPrice: 300,
    image: 'https://picsum.photos/seed/erudit-oc3/600/400',
  },
  {
    id: 4,
    teacher: 'Emily Davis',
    title: 'UI/UX Design Fundamentals',
    price: 99,
    oldPrice: 179,
    image: 'https://picsum.photos/seed/erudit-oc4/600/400',
  },
  {
    id: 5,
    teacher: 'Michael Brown',
    title: 'Python for Beginners',
    price: 79,
    oldPrice: 149,
    image: 'https://picsum.photos/seed/erudit-oc5/600/400',
  },
  {
    id: 6,
    teacher: 'Lisa Chen',
    title: 'Digital Marketing Strategy',
    price: 110,
    oldPrice: 199,
    image: 'https://picsum.photos/seed/erudit-oc6/600/400',
  },
]

export function OurCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="p-4">
                <span className="text-xs text-sky-500 font-medium">{course.teacher}</span>
                <h3 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2 leading-snug">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sky-500 font-bold">${course.price}</span>
                    <span className="text-gray-400 text-sm line-through">${course.oldPrice}</span>
                  </div>
                  <Link size={16} className="text-gray-400 hover:text-sky-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
