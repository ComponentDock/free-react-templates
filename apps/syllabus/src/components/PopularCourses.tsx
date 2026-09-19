const courses = [
  {
    title: 'Digital Marketing',
    description: 'Learn the fundamentals of digital marketing and grow your business online.',
    author: 'Sarah Johnson',
    image: 'https://picsum.photos/400/300?random=10',
  },
  {
    title: 'SEO Fundamentals',
    description: 'Master search engine optimization techniques to boost your website traffic.',
    author: 'Mike Williams',
    image: 'https://picsum.photos/400/300?random=11',
  },
  {
    title: 'WordPress Development',
    description: 'Build professional websites with WordPress from scratch.',
    author: 'Emily Davis',
    image: 'https://picsum.photos/400/300?random=12',
  },
]

export function PopularCourses() {
  return (
    <section className="px-4 py-20" aria-labelledby="popular-courses-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2
            id="popular-courses-heading"
            className="font-heading text-3xl font-bold text-ink sm:text-4xl"
          >
            Popular Courses
          </h2>
          <p className="mt-3 text-body">Discover our most popular educational programs</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group overflow-hidden rounded-lg bg-surface shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink">
                  $29
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-xl font-bold text-ink">{course.title}</h3>
                <p className="mb-4 text-sm text-body">{course.description}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/40/40?random=${course.author.length}`}
                    alt={course.author}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-ink">{course.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
