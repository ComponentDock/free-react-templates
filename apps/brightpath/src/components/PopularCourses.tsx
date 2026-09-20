import { Users, MessageSquare } from 'lucide-react'

const courses = [
  {
    title: 'Learn React.js for Beginners',
    author: 'Mart Taylor',
    description:
      'Master the fundamentals of React.js from scratch. Build real-world projects and understand component-based architecture.',
    students: 355,
    comments: 35,
    price: '$150',
    priceClass: '',
  },
  {
    title: 'Advanced CSS & Tailwind',
    author: 'Sarah Chen',
    description:
      'Take your CSS skills to the next level with modern techniques, flexbox, grid, and utility-first frameworks.',
    students: 412,
    comments: 48,
    price: '$120',
    priceClass: 'text-accent-pink',
  },
  {
    title: 'Python for Data Science',
    author: 'James Wilson',
    description:
      'Learn Python programming with a focus on data analysis, visualization, and machine learning fundamentals.',
    students: 580,
    comments: 62,
    price: '$180',
    priceClass: '',
  },
  {
    title: 'UX Design Principles',
    author: 'Emily Brooks',
    description:
      'Understand user experience design from research to prototyping. Create intuitive and beautiful digital products.',
    students: 290,
    comments: 28,
    price: '$95',
    priceClass: 'text-accent-purple',
  },
]

export function PopularCourses() {
  return (
    <section id="courses" className="py-24 bg-gray-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-heading mb-4">Popular Courses</h2>
          <p className="text-body max-w-xl mx-auto">
            Discover the most popular courses chosen by thousands of students worldwide. Learn from
            industry experts and advance your career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Course image */}
              <div className="relative h-48">
                <img
                  src={`https://picsum.photos/seed/brightpath-course-${course.title.split(' ')[1]?.toLowerCase()}/400/300`}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <img
                    src={`https://picsum.photos/seed/brightpath-author-${course.author.split(' ')[1]?.toLowerCase()}/40/40`}
                    alt={course.author}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <span className="text-white text-xs font-medium">{course.author}</span>
                </div>
              </div>

              {/* Course content */}
              <div className="p-5">
                <h4 className="text-base font-semibold text-heading mb-2 hover:text-brand transition-colors cursor-pointer">
                  {course.title}
                </h4>
                <p className="text-sm text-body mb-4 leading-relaxed">{course.description}</p>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <div className="flex gap-4 text-xs text-body">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      {course.comments}
                    </span>
                  </div>
                  <span className={`text-sm font-bold ${course.priceClass || 'text-brand'}`}>
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
