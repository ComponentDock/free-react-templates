import { Badge } from '@free-react-templates/ui'

const courses = [
  {
    title: 'Web Development',
    price: '$49',
    level: 'Beginner',
    image: 'learnova-course1',
    students: 1250,
  },
  {
    title: 'Data Science',
    price: '$59',
    level: 'Intermediate',
    image: 'learnova-course2',
    students: 980,
  },
  {
    title: 'Graphic Design',
    price: '$39',
    level: 'Beginner',
    image: 'learnova-course3',
    students: 1560,
  },
  {
    title: 'Digital Marketing',
    price: '$45',
    level: 'Beginner',
    image: 'learnova-course4',
    students: 870,
  },
  {
    title: 'Business Analytics',
    price: '$55',
    level: 'Advanced',
    image: 'learnova-course5',
    students: 650,
  },
  {
    title: 'Mobile Development',
    price: '$49',
    level: 'Intermediate',
    image: 'learnova-course6',
    students: 1120,
  },
] as const

export function TopCourses() {
  return (
    <section id="courses" aria-label="Top courses" className="bg-bg-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black uppercase text-heading-black sm:text-4xl">
          Top Courses
        </h2>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(({ title, price, level, image, students }) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${image}/400/250`}
                alt={title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <Badge className="mb-3">{level}</Badge>
                <h3 className="text-xl font-bold text-heading-black">{title}</h3>
                <p className="mt-2 text-sm text-body-gray">{students} students enrolled</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-blue">{price}</span>
                  <a
                    href="#enroll"
                    className="rounded bg-primary-blue px-4 py-2 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
