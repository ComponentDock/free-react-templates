import { Users, MessageCircle } from 'lucide-react'

const courses = [
  {
    image: 'https://picsum.photos/seed/precept-course1/400/250',
    title: 'Learn Designing',
    description:
      'When television was young, there was a hugely popular show based on the still popular fictional characte.',
    users: 355,
    comments: 35,
    price: 150,
  },
  {
    image: 'https://picsum.photos/seed/precept-course2/400/250',
    title: 'Learn Web Development',
    description:
      'When television was young, there was a hugely popular show based on the still popular fictional characte.',
    users: 355,
    comments: 35,
    price: 150,
  },
  {
    image: 'https://picsum.photos/seed/precept-course3/400/250',
    title: 'Learn Photography',
    description:
      'When television was young, there was a hugely popular show based on the still popular fictional characte.',
    users: 355,
    comments: 35,
    price: 150,
  },
]

export function PopularCourses() {
  return (
    <section id="courses" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-heading mb-2">Popular Courses We Offer</h1>
          <p className="text-body">There is a moment in the life of any aspiring.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.title} className="bg-white overflow-hidden">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-52 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-navy/80 text-white px-4 py-2 flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> {course.users}
                    <MessageCircle className="w-4 h-4 ml-2" /> {course.comments}
                  </span>
                  <span className="font-semibold">${course.price}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base font-semibold text-heading mb-2">
                  <a href="#" className="hover:text-brand transition-colors">
                    {course.title}
                  </a>
                </h4>
                <p className="text-body text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
