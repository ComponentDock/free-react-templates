import { useState } from 'react'
import { Clock, Users, MessageCircle } from 'lucide-react'

const courses = [
  {
    id: 1,
    price: '$20',
    lessons: '4 Lessons / 12 week',
    title: 'Study Law of Physics',
    desc: 'Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.',
    students: '2,193',
    comments: 2,
    image: 'https://picsum.photos/seed/classroom-c1/400/250',
  },
  {
    id: 2,
    price: '$99',
    lessons: '4 Lessons / 12 week',
    title: 'Logo Design Course',
    desc: 'Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.',
    students: '2,193',
    comments: 2,
    image: 'https://picsum.photos/seed/classroom-c2/400/250',
  },
  {
    id: 3,
    price: '$99',
    lessons: '4 Lessons / 12 week',
    title: 'JS Programming Language',
    desc: 'Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.',
    students: '2,193',
    comments: 2,
    image: 'https://picsum.photos/seed/classroom-c3/400/250',
  },
  {
    id: 4,
    price: '$20',
    lessons: '4 Lessons / 12 week',
    title: 'Study Law of Physics',
    desc: 'Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.',
    students: '2,193',
    comments: 2,
    image: 'https://picsum.photos/seed/classroom-c4/400/250',
  },
  {
    id: 5,
    price: '$99',
    lessons: '4 Lessons / 12 week',
    title: 'Logo Design Course',
    desc: 'Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.',
    students: '2,193',
    comments: 2,
    image: 'https://picsum.photos/seed/classroom-c5/400/250',
  },
  {
    id: 6,
    price: '$99',
    lessons: '4 Lessons / 12 week',
    title: 'JS Programming Language',
    desc: 'Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.',
    students: '2,193',
    comments: 2,
    image: 'https://picsum.photos/seed/classroom-c6/400/250',
  },
]

export function Courses() {
  const [start, setStart] = useState(0)
  const visible = 3

  const prev = () => setStart((s) => (s - visible + courses.length) % courses.length)
  const next = () => setStart((s) => (s + visible) % courses.length)

  const displayed: typeof courses = []
  for (let i = 0; i < visible; i++) {
    displayed.push(courses[(start + i) % courses.length]!)
  }

  return (
    <section id="courses" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900">Courses</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayed.map((course) => (
            <div
              key={course.id + '-' + start}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="inline-block bg-indigo-500 text-white text-xs font-black px-3 py-1 rounded-full mb-2">
                  {course.price}
                </span>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Clock size={14} /> {course.lessons}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{course.desc}</p>
              </div>
              <div className="border-t border-gray-100 px-6 py-3 flex justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Users size={14} /> {course.students} students
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={14} /> {course.comments}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 flex justify-center gap-4">
          <button
            onClick={prev}
            className="bg-indigo-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-indigo-600 transition-colors"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="bg-indigo-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-indigo-600 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}
