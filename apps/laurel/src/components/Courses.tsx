const courses = [
  {
    image: 'https://picsum.photos/seed/laurel-course1/400/300',
    title: 'Digital Marketing Mastery',
    description:
      'Learn the fundamentals of digital marketing including SEO, social media, and content strategy.',
    price: '$29.99',
  },
  {
    image: 'https://picsum.photos/seed/laurel-course2/400/300',
    title: 'Web Development Bootcamp',
    description:
      'Master HTML, CSS, JavaScript, and React to build modern, responsive websites from scratch.',
    price: '$29.99',
  },
  {
    image: 'https://picsum.photos/seed/laurel-course3/400/300',
    title: 'Data Science Fundamentals',
    description:
      'Explore data analysis, visualization, and machine learning with Python and real-world datasets.',
    price: '$29.99',
  },
  {
    image: 'https://picsum.photos/seed/laurel-course4/400/300',
    title: 'Graphic Design Essentials',
    description:
      'Develop your creative skills with tools like Photoshop, Illustrator, and design principles.',
    price: '$29.99',
  },
]

export function Courses() {
  return (
    <section id="courses" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-heading sm:text-4xl">
            Our Popular Courses
          </h2>
          <p className="mt-4 text-brand-body">
            Explore our most sought-after courses designed to help you succeed.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-[10px] bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <img src={course.image} alt={course.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-brand-heading">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-brand-body">{course.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                  <button
                    type="button"
                    className="rounded-[5px] bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
