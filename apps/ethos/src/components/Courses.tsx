import { cn } from '@free-react-templates/ui'

const courses = [
  {
    image: 'https://picsum.photos/seed/ethos-course-1/400/250',
    title: 'Digital Marketing',
    description:
      'Learn the fundamentals of digital marketing including SEO, social media, and analytics.',
    price: '$120',
  },
  {
    image: 'https://picsum.photos/seed/ethos-course-2/400/250',
    title: 'Web Development',
    description: 'Master HTML, CSS, JavaScript and modern frameworks to build responsive websites.',
    price: '$150',
  },
  {
    image: 'https://picsum.photos/seed/ethos-course-3/400/250',
    title: 'Graphic Design',
    description:
      'Explore design principles, typography, color theory, and industry-standard tools.',
    price: '$100',
  },
]

export function Courses() {
  return (
    <section id="courses" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Popular Courses</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{course.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-brand-400">{course.price}</span>
                  <a
                    href="#courses"
                    className={cn(
                      'bg-brand-400 px-4 py-2 text-xs font-semibold text-white shadow-sm',
                      'hover:bg-brand-500',
                    )}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
