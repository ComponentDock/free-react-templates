import { Badge } from '@free-react-templates/ui'
import { ChevronRight } from 'lucide-react'

const COURSES = [
  {
    title: 'Web Design Fundamentals',
    tag: 'Featured',
    price: '$35',
    author: 'William Smith',
    reviews: 24,
    students: 145,
    img: 'learnpeak-course-1',
  },
  {
    title: 'Digital Marketing Basics',
    tag: 'New',
    price: '$29',
    author: 'Sarah Johnson',
    reviews: 18,
    students: 98,
    img: 'learnpeak-course-2',
  },
  {
    title: 'Photography Masterclass',
    tag: 'Featured',
    price: '$42',
    author: 'Michael Brown',
    reviews: 31,
    students: 210,
    img: 'learnpeak-course-3',
  },
]

export function CourseCards() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl font-bold text-dark">Choose Your Course</h2>
          <button className="bg-brand hover:bg-brand-hover text-white font-semibold uppercase text-xs tracking-wider px-6 h-10 flex items-center gap-2 transition-colors">
            Search Course <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="bg-white group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${course.img}/600/400`}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="default"
                    className={`text-xs font-semibold uppercase px-3 py-1 ${course.tag === 'New' ? 'bg-green-500 text-white' : 'bg-brand text-white'}`}
                  >
                    {course.tag}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-light">
                    Price: <span className="text-brand font-bold">{course.price}</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{course.title}</h3>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={`https://picsum.photos/seed/${course.img}-author/40/40`}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <span className="font-semibold text-dark text-sm">{course.author}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 text-xs text-muted-light">
                  <span>{course.reviews} Reviews</span>
                  <span>{course.students} Students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
