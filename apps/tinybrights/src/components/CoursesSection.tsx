const courses = [
  {
    thumbnail: 'https://picsum.photos/seed/course1/600/400',
    category: 'Art & Craft',
    title: 'Creative Colors Workshop',
    description: 'Express yourself through painting, drawing, and hands-on craft projects.',
  },
  {
    thumbnail: 'https://picsum.photos/seed/course2/600/400',
    category: 'Music',
    title: 'Rhythm & Melody Class',
    description: 'Discover the joy of music with singing, instruments, and movement.',
  },
  {
    thumbnail: 'https://picsum.photos/seed/course3/600/400',
    category: 'Science',
    title: 'Little Scientists Lab',
    description: 'Fun experiments that spark curiosity about the natural world.',
  },
  {
    thumbnail: 'https://picsum.photos/seed/course4/600/400',
    category: 'Language',
    title: 'Story Time Adventures',
    description: 'Building vocabulary and reading skills through interactive storytelling.',
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="bg-brand-light py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-brand-blue">
          Popular Courses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600">
          Fun-filled programs designed to inspire and educate young learners.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy"
                />
                <span className="btn-pill absolute top-3 left-3 bg-brand-orange px-4 py-1 text-xs font-bold text-white">
                  {course.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
