const instructors = [
  { name: 'Sarah Johnson', role: 'Senior Engineer', company: 'Google' },
  { name: 'Michael Chen', role: 'ML Engineer', company: 'Netflix' },
  { name: 'Emily Rodriguez', role: 'Product Designer', company: 'Airbnb' },
  { name: 'David Kim', role: 'Cloud Architect', company: 'AWS' },
]

export function Instructors() {
  return (
    <section id="instructors" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Our Instructors
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Learn From the Best
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Industry leaders who teach what they practice every day.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/coursely-teacher-${instructors.indexOf(instructor) + 1}/96/96`}
                alt={`Portrait of ${instructor.name}`}
                loading="lazy"
                className="mx-auto h-20 w-20 rounded-full object-cover"
              />
              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{instructor.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {instructor.role} at {instructor.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
