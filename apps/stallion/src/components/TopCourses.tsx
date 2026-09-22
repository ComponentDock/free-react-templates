import { ArrowRight } from 'lucide-react'

const courses = [
  {
    title: 'Target Specific Muscle',
    price: 275,
    image: 'https://picsum.photos/seed/stallion-c1/400/250',
  },
  { title: 'Weightlifting', price: 200, image: 'https://picsum.photos/seed/stallion-c2/400/250' },
  {
    title: 'Flex Your Muscle',
    price: 225,
    image: 'https://picsum.photos/seed/stallion-c3/400/250',
  },
  { title: 'Cardio Blast', price: 180, image: 'https://picsum.photos/seed/stallion-c4/400/250' },
]

export function TopCourses() {
  return (
    <section id="courses" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Top Courses That are being Offered
          </h2>
          <p className="mt-4 text-muted">
            Join our expert-led courses and take your fitness journey to the next level.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <a
                  href="#"
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
                  aria-label={`Join ${course.title}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="flex items-center justify-between p-4">
                <h3 className="text-lg font-semibold text-ink">{course.title}</h3>
                <span className="text-lg font-bold text-brand">${course.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
