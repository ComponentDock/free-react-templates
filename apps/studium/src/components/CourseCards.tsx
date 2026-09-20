const courses = [
  {
    title: 'Web Development Bootcamp',
    category: 'IT & Software',
    students: 1200,
    seed: 'studium-course1',
  },
  {
    title: 'Digital Marketing Mastery',
    category: 'Marketing',
    students: 980,
    seed: 'studium-course2',
  },
  {
    title: 'Photography Fundamentals',
    category: 'Photography',
    students: 750,
    seed: 'studium-course3',
  },
  { title: 'Health & Wellness Guide', category: 'Health', students: 640, seed: 'studium-course4' },
  { title: 'Music Production Basics', category: 'Music', students: 890, seed: 'studium-course5' },
  { title: 'Video Editing Pro', category: 'Audio Video', students: 1100, seed: 'studium-course6' },
]

export function CourseCards() {
  return (
    <section id="course" className="bg-brand-light py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-brand-text md:text-4xl">Pick Your Course</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${course.seed}/600/300`}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-left">
                <span className="mb-2 inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
                  {course.category}
                </span>
                <h3 className="mb-2 text-lg font-bold text-brand-text">{course.title}</h3>
                <p className="text-sm text-brand-muted">
                  {course.students.toLocaleString()} students enrolled
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="#course"
            className="inline-block rounded-full bg-brand-blue px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90"
          >
            See All Courses
          </a>
        </div>
      </div>
    </section>
  )
}
